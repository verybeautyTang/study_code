
函数组件的特点：
  没有组件实例
  没有声明周期
  没有state和setState， 只能接收props 

class组件的问题：
  大型组件很难拆分和重构，不好测试
  相同的业务逻辑，分散到各个方法里面，逻辑很乱
  复用逻辑比较复杂[minxins、hoc、renderProps] 都存在一些问题

react组件更易用函数表达式：
  react提倡函数式编程
  函数式更灵活、更易拆分和测试
  函数组件比较简单，需要用Hooks增强能力

StateHook: 让函数组件实现state和setState的功能
  函数组件式一个纯函数，执行完就销毁，无法存储state，默认函数组件也没有state 
  需要StateHook，把state功能“钩”到纯函数中

  使用说明： 所有Hooks都是用use开头，自定义hook也是一样的，一般非hooks的地方不要这样写


EffecetHook
  让函数组件模拟生命周期，didMount、 didUpdate、willUnMount
  让纯函数有了副作用。默认情况下，纯函数式没有副作用的，副作用是为了对函数之外造成影响


useRef
 获取dom节点，current改变不会重新render

useContext
 提供了组件间数据传递的能力【比较高级的类型】修改就是context.value =''就可以

 useReducer(state, type)=> 返回一个新的数值
 redux和useReducer的区别
 useReducer是usestate的替代方案，用于state的复杂变化；
 useReducer单个组件状态管理，组件通信还是要用props，redux是全局的状态管理，多组件数据共享。


 useMemo
  react会默认更新所有子组件
  useMemo和memo可以属于性能优化

  useMemo是缓存数据， useCallback是返回函数


自定义HOOk

封装通用的功能，开发和使用第三方Hooks, 自定义Hook带来了无限的拓展性，解耦代码


为什么hooks不能放在for、if里面去
  函数组件在初始化和组件更新的时候都会重新去执行这个函数，获取新的组件
  初始化 是初始化state的数据， 更新的时候 是读取state的数据 
  为了保证数据的对应
  hooks是严重依赖与代码的顺序读取【必须在最外层的逻辑里面去执行】、
  hooks的调用顺序必须保持一致，如果在循环、依赖、判断里面 那无法保证数据一致

react hooks的逻辑服用 
  class的逻辑复用：
    HOC:
    Render Props
     学习成本高，默认纯函数的功能有限  

Hooks的好处：
 不会产生组件嵌套
 变量作用域很明确
 完全符合HOOKS的条件
React Hooks的主要事项

React Hooks注意事项：
  useState初始化数据只在第一次进行
  useEffect可能会造成死循环
