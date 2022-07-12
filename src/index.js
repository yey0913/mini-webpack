// 写好的组件
import CsingRuler from './page/index.js';

const components = [
  CsingRuler,
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component); //到时候项目使用组件名,就是这个component.name
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  CsingRuler,
}