// 引入组件
import CsingRuler from './ruler.vue'

CsingRuler.install = Vue => Vue.component(CsingRuler.name, CsingRuler); //这里的name是.vue文件里面定义的

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(CsingRuler);
}

export default CsingRuler