前端机试题
需求说明:
从接口A和接口B分别拉取第一页列表数据合并后渲染到下图中的红色区域
接口地址：
接口 A: https://6cxx9pggi4.execute-api.us-east-1.amazonaws.com/prod/mock/meeting-a/list
接口 B: https://6cxx9pggi4.execute-api.us-east-1.amazonaws.com/prod/mock/meeting-b/list
数据格式说明：
两个接口都是GET请求，请求参数和拉取的数据格式相同，但都内容不同的无序列表
请求参数：
响应参数序列化协议为 json如下图所示：

实际内容为消息体加密后的密文，加密算法为 AES，相关参数如下（允许使用第三方库）:
Text Format: Base64
Mode: ECB
Key Size: 128 Bits
Secret Key: 0000000000000000
设计标注：地址点击这里
分组和排序要求：
合并后的数据以 create_time 字段按天进行分组，同一组内的记录按照时间从早到晚进行排序（自行实现）
组支持折叠和展开，默认全部展开
记录在 hover 和 选中 状态下展示不同的背景和高亮色



开发要求：
请使用 React.js/Vue.js 相关技术栈完成，使用TypeScript可加分,
请考虑延时和性能
请在 https://codesandbox.io/s/ 上新建项目进行开发，完成后请将链接分享发送给HR！
