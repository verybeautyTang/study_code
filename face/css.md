html
  1、如何理解html语义化
    解答：对开发者来说可读性更强， 让搜索引擎更容易读懂。
  2、html中哪些元素是块级的，哪些元素是內联元素
    解答：块级【独占一行display：block、table】 div h1-h5 table ul ol p; 內联元素【不独占一行display：inline/ inline-block】 span img input button...
css
  1、布局
    -- 盒子模型的宽高是如何计算的
    -- margin纵向重叠问题
    -- margin负值问题
    -- BFC的理解与应用
    -- float布局问题
      双飞翼
      圣杯
    -- clearFix手写
    -- flex画骰子
  2、定位
    -- absolute、relative分别是靠谁来定位
      解答： relative相对于自身定位，absolute相对于离他最近的定位元素定位，如果没有，则指向body
    -- 居中对齐的实现方式
      解答：
        水平居中
          inline元素： 设置text-align:center
          block元素： margin： auto
          absolute元素： left: 50% + margin-left负值
        垂直居中
         inline元素： 设置line-height的值等于height【必须要知道高度才可以】
        absolute元素： top: 50% + margin-top负值必须要知道高度才可以】 
        / transform（-50%， -50%）/ left、top、right、bottom都设置为0， margin设置为auto [这两个不需要知道高度]
  3、图文样式
    -- line-height的如何继承【都是继承父元素的数据，但是略有不同】
      解答：
        1⃣️ 数值：继承直接赋值 ，比如30px
        2⃣️ 比例：继承直接赋值比例， 比如2会直接继承
        3⃣️ 百分比：继承计算出来的数据， 比如p标签的line-height: 200%，那么继承line-height就是 30 * 200% = 60px
    -- line-height有几种形式
  4、响应式
    -- rem是什么？
      解答：rem是一个长度单位
      rem的弊端：具有阶梯性的，不能完全的做到一个完全严格的响应式。
    -- 网页视窗尺寸
        解答：
        screen: 相对屏幕
        inner：相对网页视窗
        client：相对body
    -- vw/vh ， 这个几没有阶梯性了，完全响应式了
      解答： 
      innerheight = 100vh;
      innerWidth = 100vw;
      vw： 网页视窗宽度的1/100
      vh： 网页视窗高度的1/100
      vmax：取两者的最大值
      vmin：取两者的最小值

    -- rem、px、 em 对比
      解答：
        px： 绝对长度单位
        em：相对长度单位，相对父元素，不常用
        rem：相对长度单位，相对跟元素，通常用于响应式布局
    -- 如何实现响应式
      解答：
        使用media-query，根据不同的宽度设置跟元素的font-size【一般很不常用，一个项目基本只有一次】，跨度比较大的情况
        使用rem
