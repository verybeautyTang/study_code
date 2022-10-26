Q: Vue的声明周期
A：
  beforeCreate: 创建一个空白的vue实例，data、method都没有初始化，都不能使用
  Created: vue实例创建【js对象】完成，完成了响应式绑定，data、method初始化完成，可以调用【可以做一些跟js模型有关系，跟el节点没有关系的事情】
  beforeMount: 编译模版，调用render生成vdom，还没有开始渲染dom
  mounted：完成dom渲染，组件创建完成，由创建阶段进入运行阶段

  beforeUpdate：data发生变化之后，准备更新dom【这里还没有更新dom】
  update：data发生变化，且dom已经更新。不要在update中修改data。可能会导致死循环

  beforeunmount: 组件进入销毁阶段，可以做一些全局事件、自定义事件等
  unmounted: 组件销毁完毕，所有的子组件也销毁完毕



Q:keep-alive组件的生命周期【创建一次被缓存 不会创建多次】
A:
  onActived： 缓存组件被激活
  onDeactivated: 缓存组件被隐藏

Q: vue什么时候操作dom的时候最合适？
A：
  mounted和updated都不能保证视图已经全部渲染完成，应该使用nextTick进行操作
  nextTick是仅在整个视图都被渲染完之后才会运行的代码
Q：ajax应该放在哪个生命周期？
A：created 和 mounted都可以，但是更推荐mounted里面


Q：vue3 compositionApI声明周期有什么区别？
A：
  用setup代替了beforeCreate和created 
  使用Hooks的形式，比如mounted改成了onMounted()；
