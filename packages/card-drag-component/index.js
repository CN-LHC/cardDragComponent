
// 导入组件，组件必须声明 name
import cardDragComponent from './src/card-drag-component.vue'

// 为组件提供 install 安装方法，供按需引入
cardDragComponent.install = function (Vue) {
  Vue.component(cardDragComponent.name, cardDragComponent)
}

// 默认导出组件
export default cardDragComponent
