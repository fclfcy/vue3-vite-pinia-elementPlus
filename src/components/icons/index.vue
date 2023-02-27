<template>
    <svg :class="svgClass" aria-hidden="true">
      <use :xlink:href="iconName" :fill="color" />
    </svg>
  </template>
  
  <script>
  import { computed, defineComponent } from 'vue'
  export default defineComponent({
    props: {
      name: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: '#181818'
      },
    },
    setup(props) {
      return {
        iconName: computed(() => `#icon-${props.name}`),
        svgClass: computed(() => {
          if (props.name) {
            return `svg-icon ${props.name}`
          }
          return 'svg-icon'
        })
      }
    }
  })
  </script>
  
  <style lang="less" scoped>
  .svg-icon {
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    fill: currentColor;
    vertical-align: -2px;
  }
  </style>