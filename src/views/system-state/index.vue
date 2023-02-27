<template>
    <div class="system-state" v-loading="loading">
        <div class="box-card-content">
            <div class="box-card-warp">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>系统状态</span>
                        </div>
                    </template>
                    <ul class="system-status">
                        <li>
                            <span>
                                <i v-if="systemStatus !== 'ABNORMAL'" class="el-icon-video-pause"></i>
                                <i class="el-icon-video-play" v-else></i>
                                系统运行状态：
                            </span>
                            <span>
                                {{ systemFilter(systemStatus) }}
                            </span>
                        </li>
                        <li>
                            <span>
                                <i class="el-icon-time"></i>
                                系统开启时间：
                            </span>
                            <span>{{ startRunAt }}</span>
                        </li>
                        <li>
                            <span>
                                <i class="el-icon-refrigerator"></i>
                                服务运行状态：
                            </span>
                            <span>{{ serviceFilter(serviceStatus.nscan_service) }}</span>
                        </li>
                        <li>
                            <span>
                                <i class="el-icon-thumb"></i>
                                指纹服务运行状态：
                            </span>
                            <span>{{ serviceFilter(serviceStatus.nscan_finger) }}</span>
                        </li>
                        <li>
                            <span>
                                <i class="el-icon-s-tools"></i>
                                配置核查运行状态：
                            </span>
                            <span>{{ serviceFilter(serviceStatus.conf_check) }}</span>
                        </li>
                    </ul>
                </el-card>
            </div>
            <div class="box-card-warp">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>资源监控</span>
                        </div>
                    </template>
                    <div class="resources-charts">
                        <div class="ripple">
                            <span style="color: #0C7AFF">CPU利用率</span>
                            <div id="cpu-rate" ref="cpu-rate"></div>
                        </div>
                        <div class="ripple">
                            <span style="color: #0FC226">内存使用率</span>
                            <div id="disk-rate" ref="disk-rate"></div>
                        </div>
                        <div class="ripple">
                            <span style="color: #FA900D">磁盘利用率</span>
                            <div id="memory-rate" ref="memory-rate"></div>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
        <div class="box-card-content">
            <div class="box-card-warp">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>磁盘IO</span>
                        </div>
                    </template>
                    <div class="stack-charts">
                        <div id="disk-rw" ref="disk-rw"></div>
                    </div>
                </el-card>
            </div>

            <div class="box-card-warp">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>网络读写</span>
                        </div>
                    </template>
                    <div class="stack-charts">
                        <div id="net-rw" ref="net-rw"></div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { systemStateApi } from '@/api/assets';
    import { reactive, ref, onMounted, getCurrentInstance, nextTick, onUnmounted } from 'vue';
    import { formatDate } from '@/utils/filters';
    import 'echarts-liquidfill/src/liquidFill.js';
    
    // 定义数据
    const { proxy } = getCurrentInstance();
    let loading = ref(false);
    let startRunAt = ref('');
    let systemStatus = ref('');
    let serviceStatus = reactive({});

    // 进页面处理
    onMounted(() => {
        getList();
        proxy.$addSockets(sockets, proxy);
    });

    onUnmounted(() => {
        proxy.$removeSockets(sockets, proxy);
    });
    // socket监听事件
    const sockets = {
        my_response_message(res) {
            dealData(JSON.parse(res));
        }
    }

    //获取数据
    const getList = async() => {
        loading = true;
        let { data } = await systemStateApi();
        dealData(data);
        loading = false;
    }

    // 处理数据
    const dealData = (data) => {
        if ( data ) {
            loading = false;
            const {
                cpu_percentage,
                disk_info,
                disk_rw_info,
                memory_info,
                net_rw_info,
                service_status,
                start_run_at,
                system_status
            } = data;
            systemStatus.value = system_status;
            startRunAt.value = start_run_at;
            serviceStatus = service_status;
            const disk_read = [];
            const disk_write = [];
            const diskRuntime = [];
            disk_rw_info.length && disk_rw_info.filter( item => {
                disk_read.push( item.read );
                disk_write.push( item.write );
                diskRuntime.push( formatDate( item.runtime ) );
            });
            const net_in = [];
            const net_out = [];
            const netRuntime = [];
            net_rw_info.length && net_rw_info.filter( item => {
                net_in.push( item.in );
                net_out.push( item.out );
                netRuntime.push( formatDate( item.runtime ) );
            });
            drawCharts( cpu_percentage / 100, '#52acff', '#0c7aff', 'cpu-rate' );
            drawCharts( memory_info.percentage / 100, '#60ce83', '#0fc226', 'disk-rate' );
            drawCharts( disk_info.percentage / 100, '#fbd94f', '#fa900d', 'memory-rate' );
            drawStackCharts( 'disk-rw', [ '磁盘读取', '磁盘写入' ], [ '#fe339f', '#787af0' ], diskRuntime, disk_read, disk_write );
            drawStackCharts( 'net-rw', [ '上行', '下行' ], [ '#f5a54a', '#53b9ff'  ], netRuntime, net_in, net_out );
        }
    }

    // 绘制echarts图标
    function drawCharts ( value, borderColor, color, arg ){
        nextTick( () => {
            const el = document.getElementById(arg);
            let myChart = proxy.$echarts.getInstanceByDom(el);
            if (myChart == null) {
                myChart = proxy.$echarts.init( el );
            }
            const option = {
                title: {
                    textStyle: {
                        color: 'rgb(138, 180, 243)',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 16,
                        fontWeight: '400',
                        align: 'center',
                        baseline: 'middle',
                        position: 'outer',
                        verticalAlign: 'middle'
                    },
                    left: 'center',
                    top: '20%'
                },
                series: [
                    {
                        type: 'liquidFill',
                        radius: '80%',
                        waveAnimation: true,
                        outline: {
                            // show: true , //是否显示轮廓 布尔值
                            borderDistance: 1, // 外部轮廓与图表的距离 数字
                            itemStyle: {
                                borderColor: borderColor, // 边框的颜色
                                borderWidth: 3 // 边框的宽度
                                // shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
                                // shadowColor: '#000' //外部轮廓的阴影颜色
                            }
                        },
                        itemStyle: {
                            opacity: 0.9, // 波浪的透明度
                            shadowBlur: 0 // 波浪的阴影范围
                        },
                        backgroundStyle: {
                            color: '#fff' // 图表的背景颜色
                        },
                        label: { // 数据展示样式
                            show: true,
                            color: '#000',
                            insideColor: '#fff',
                            fontSize: 20,
                            fontWeight: 400,
                            align: 'center',
                            baseline: 'middle',
                            position: 'inside'
                        },
                        data: [
                            {
                                value: value,
                                direction: 'left',
                                itemStyle: {
                                    color: color
                                }
                            }
                        ]
                    } ]
            };
            option && myChart.setOption( option );
            window.addEventListener( 'resize', () => {
                myChart.resize();
            } );
        } );
    }                                                                                             

    function drawStackCharts ( arg, legendData, color, runtime, disk_read, disk_write ){
        nextTick( () => {
            const el = document.getElementById(arg);
            let myChart = proxy.$echarts.getInstanceByDom(el);
            if (myChart == null) {
                myChart = proxy.$echarts.init( el );
            }
            const option = {
                legend: {
                    orient: 'horizontal',
                    y: '8%',
                    x: 'right',
                    icon: 'circle',
                    padding: -0.5, //调节legend的位置
                    data: legendData,
                },
                color: color,
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: runtime
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} b'
                        }
                    }
                ],
                series: [
                    {
                        name: legendData[0],
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: disk_read
                    },
                    {
                        name: legendData[1],
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: disk_write
                    },
                ]
            };
            option && myChart.setOption( option );
            window.addEventListener( 'resize', () => {
                myChart.resize();
            } );
        } );
    }

    // 过滤
    function systemFilter (val) {
        if (val === 'RUNNING') {
            return '运行中';
        } else if (val === ' ABNORMAL') {
            return '异常';
        } else {
            return '未知';
        }
    }
    function serviceFilter (val) {
        if (val === 'RUNNING') {
            return '运行中';
        } else if (val === 'FATAL') {
            return '启动错误';
        } else if (val === 'STOPPED') {
            return '停止';
        } else if (val === 'STARTING') {
            return '启动中';
        } else {
            return '未知';
        }
    }
</script>

<style lang="less" scoped>
    .box-card-content {
        display: grid;
        grid-template-columns: repeat(2, calc(50% - 6px));
        gap: 10px;
        padding: 10px 0;
        .box-card-warp {
            ::deep .box-card .el-card__body {
                min-height: 32vh;
                max-height: 32vh;
                overflow: auto;
                margin-bottom: 10px;
            }
            .resources-charts {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                gap: 10px;
                min-height: calc(32vh - 40px);
                max-height: calc(32vh - 40px);
                .ripple{
                    span{
                        height: 1.5rem;
                        font-size: 16px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    div{
                        width: 100%;
                        min-height: calc(32vh - 1.5rem - 40px);
                        max-height: calc(32vh - 1.5rem - 40px);
                    }
                }
            }
            .system-status{
                height: calc(32vh - 40px);
                padding: 10px 5rem 10px 0;
                li{
                    height: 2rem;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    i{
                        font-size: 1.2rem;
                        color: #52acff;
                    }
                }
            }
            .stack-charts{
               div{
                   height: 27vh;
               }
            }
        }
    }
</style>
