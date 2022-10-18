类型判断的方法：
  typeof - 基本类型可以判断出来，null判断出来为"object"
  instanceof - 判断引用类型的类型【array、function】，判断方法【原型链】代码见1
  constructor: 查看到目标的构造函数，但是如果是undefined或者是null，会报错，因为constructor是返回构造函数本身，但是null和undefined是没有构造函数属性的。
  Object.prototype.toString()，返回的格式是【object XXXX】的格式，要通过slice(8, -1)的方法直接获取
js是一种弱类型，也可以说是一种动态语言。
js是如何进行数据转换的？
  +：
    基本类型：
      string + 其他类型数据，会将其他类型数据转为string再计算
      其他情况下，会转化为number类型，undefined会被转化成NAN, NAN + 任何类型的数据 = NAN
    复杂类型（引用类型）：
      使用valueof、toString两种方法，这两种方法用哪种是取决于ES规范里面的toPrimitive方法。看对象倾向于转换什么就用什么方案。
  
cant read property of undefined的解决方案
  1、 使用&& 判断
  2、使用 || 或者 ？？ 设置兜底
  3、 使用try-catch进行补货
  4、使用lodash的get API进行查询


