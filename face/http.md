cookie
http是无状态的，每次请求都要携带cookie，帮助识别身份
服务端可以向客户端set-cookie,大小4kb
cookie默认有跨域限制，不跨域共享，不跨域传递【默认情况下】。
但是可以通过设置跨域共享cookie，
跨域传递cookie，使用withCredentials【在前端和服务端都要设置允许跨域】



在html5之前 cookie也可以用于本地存储【但是cookie本地存储的能力比较有限】


现代浏览器开始禁止第三方cookie：禁止网页引入的第三方js设置
主要是为了保护用户隐私，打击第三方广告
新增属性SameSite： strict/lax/none

cookie一般是用于登录验证，存储用户标识
session是在服务端，存储用户的相信信息
cookie + session 是当前验证用户登录的方案之一


cookie是HTTP规范，但是token是自定义传递
cookie会被浏览器存储，但是token是需要自己存储
token没有跨域限制



token发起登录的情况【jwt(json web token)】

前端发起登录，后端验证成功之后，返回一个加密的token
前端自行存储token

访问服务端接口，需在header里面带上token作为用户信息


session+cookie 与jwt的对比
1、token里面已经包含了用户信息，但是cookie一般只会包含用户id
2、服务端不会几种存储

Cookie与Token的区别？

cookie：HTTP标准，有跨域限制，配合session使用登录
token：没有标准，没有跨域限制，一般使用jwt实现用户登录和校验


Session存在的价值： 集中存储用户信息，因为cookie不能存储太多【安全性不高】


Q：Session和JWT哪个更好？【更适用于哪些场景，不要有好坏的思维】

session的优点： 
  原理简单、容易学习
  用户信息存储在服务端、集中管理
缺点：
  占用服务端内存、硬件成本高
  多进程多线程不好同步，需要占用第三方缓存，因为内存是相互隔离的【特别是做负载均衡的情况下】
  默认有跨域限制

  jwt的优点：
  不占用服务端内存
  多进程、多服务器不受影响，所有信息都是存在浏览器中
  缺点：
  用户信息存储在客户端，无法快速封闭某用户
  若服务端的密钥被泄漏，则用户信息全部丢失
  token提及一般比cookie大，会增加请求的数据量 


A：若有严格管理用户信息的需求【保密、快速定位用户】就用session
如果没有特殊要求，则使用jwt 



Q：如何实现SSO单点登录？

如果主域名相同，直接共享cookie，如果不相同则建议使用SSO
基于cookie，虽然默认跨域不共享，但是如果主域名相同，可以设置cookie domain为主域名，就可以共享，但是要是主域名不是完全相同，则无法共享。

可以使用sso的技术
OAth2.0: 不用用户输入用户密码、直接使用第三方验证登录，比如微信扫码登录
 

Q：TCP协议和UDP协议有什么区别？
<!-- 1、HTTP在应用层、TCP/UDP在传输层 -->
TCP有三次握手、四次挥手、稳定传输，适用稳定传输的场景
UDP无连接无断开，不稳定传输但是效率高【适合视频会议、语音通话

Q：HTTP协议的1.0 1.1 2.0之前的区别
1.0: 最基础的http协议，只实现了基本的get、post方法
1.1: 
  1、增加缓存策略： cache0-control Etag等
   2、支持长连接 Connection:Keep-Alive， 一次tcp连接可以发多次请求
   3、支持断点续传【大文件之类的】，状态码206
   4、支持新的方法 put、delete等
2.0:
  1、可压缩header，减少体积
  2、多路复用，一次TCP连接中可以做多个HTTP并发请求
  3、服务端推送【但是现在更多的用web sokect更多】


Q：什么是HTTPS中间人攻击？如何预防？

HTTPS是加密传输HTTP+SSL的加密方式（对称+非堆成加密），HTTP是明文传输

中间人攻击：服务端在传递公钥过程中，被黑客劫持，替换服务端公钥。并且劫持了随机码，用自己的私钥解密的一个方式


如何预防： 使用证书【第三方下发的】CA证书之类的

Q: script defer & script  async的区别？
script: html暂停解析，下载js、执行js、最后继续解析html
script defer: html继续解析，并行下载hs，html解析完再执行js  
script async: html继续解析，并行下载js、执行js，再解析html


Q：prefetch和dns-prefecth有什么区别？
A: prefetch和dns-prefecth没有关系。prefetch是资源的欲获取，dns-prefecth是dns的预查询。
  preloa是资源在当前页面使用，会优先加载
  prefetch资源在未来页面使用，空闲时加载
  dns-prefecth：DNS的预查询
  dns-connection: DNS预连接


  前端攻击：
  XSS[跨站脚本攻击] 将js插入网页中，渲染时执行js代码
  预防： 使用特殊字符【前端和后端都要做】
  CORS:


HTTP状态码：
  分类：
    1XX：服务器接受到请求
    2XX：请求成功，如200
    3XX：重定向， 如302
    4XX：客户端错误： 如404
    5XX：服务端错误：如500
  常用状态码：
    200-请求成功 / 206-断点续传
    301-永久重定向 / 302-临时重定向 【配合location（respond-header），浏览器自动处理】 / 304-资源没有被修改【协商缓存】
    404-资源没有找到 / 403-无权限 
    500-服务端错误 / 504- 网关超时

Restful API
  method: 
  Get、Post [传统的方法]
  Get、Post、Put、Delete [现在的方法]
  RestfulAPI：一种新的API设计方法
    传统的API是把每个url作为一个功能，RestfulAPI是把每个url当作每个资源
  如何设计一个资源
    1、尽量不要用url参数【不要这样直接去做/api/list/pageIndex = 1, 用method作为类型


HTTP headers:
  request headers: 
    Accept: 浏览器接受的数据格式
    Accept-Encoding:浏览器可接受的压缩算法，如gzip[保证资源变小]
    Connection: 一次tcp连接重复使用,如 keep-alive
    cookie
    hOst：请求域名
    user-agent： 浏览器信息
    content-type：发送数据的格式
  response headers:
    content-type：返回数据的格式
    content-length:返回数据的大小
    conetent-encoding： 返回数据的压缩算法
    set-cookie： 修改cookie


  http的缓存
    什么是缓存？ 
    为什么要缓存：网络请求有可能会很慢而且是不稳定的，尽量减少网络请求的数量和体积。
    哪些资源可以被缓存： js、css、img【一旦上线之后，修改的可能性就不大】 webpack的hash 后缀是不会改的【根据文件内容计算 hash，文件内容变化，hash才会变】
  缓存相关的header

  强制缓存：
  cache-control: // 在response-header中，服务端控制的哦【控制强制缓存的逻辑】
    max-age: 缓存时间，判断过期时间，如果没有过期，直接返回本地资源即可。
    no-cache: 不用强制缓存，交给服务端处理
    no-store: 不用强制缓存，也不让服务端缓存
    privite： 只允许最终用户做缓存
    public: 允许中间的路由做缓存
  expires：也是控制缓存过期的，但是已经被cache-control代替了

  协商缓存
    服务端缓存厕率
    服务端判断客户端资源是否一致
    一致返回304，否则返回200和最新的资源
    // 都是在response-header中
  last-modified: 资源的最后修改时间
  if-modified-since: 在request-header中带上最后修改时间
  etag: 资源的唯一标识
  request带上if-none-match: 资源的唯一标识
  if-no-cache: 

  会优先使用etag 因为last-modified只能精确到秒。如果资源被重复生成，但是内容不变，etag更精确


  刷新操作对缓存的影响
  正常操作： 强制缓存和协商缓存有效
  手动刷新： 强制缓存失效，协商缓存有效
  强制刷新： 强制缓存和协商缓存都失效