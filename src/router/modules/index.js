import Layout from '@/components/Layout/index.vue';
import AppMain from '@/components/Layout/components/AppMain.vue';

export default [
  {
    path:'/', redirect:'/login' ,
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/system-state',
    component: Layout,
    name: 'system-state',
    meta: {
        title: '系统状态',
        roles: [ 'operator' ],
        icon: 'system-state',
    },
    children: [
            {
                path: 'index',
                name: 'system-state-index',
                component: () => import('@/views/system-state/index.vue'),
                meta: {
                    title: '系统状态',
                    roles: [ 'operator' ],
                }
            },
      ]
  },
];
