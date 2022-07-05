const a = {
  name: '222',
  other: {
    hobby: ['dance', 'sing', 'fish']
  }
}

Object.freeze(a)

a.name = 'ssss'
a.other.hobby = ['我是改编后的冻结的数据']

console.log(a.other)

// freeze是浅冻结，需要深度遍历进入深冻结阶段

// 深冻结函数。
function deepFreeze(obj) {

  // 取回定义在 obj 上的属性名
  var propNames = Object.getOwnPropertyNames(obj);

  // 在冻结自身之前冻结属性
  propNames.forEach(function(name) {
    var prop = obj[name];

    // 如果 prop 是个对象，冻结它
    if (typeof prop == 'object' && prop !== null)
      deepFreeze(prop);
  });

  // 冻结自身 (no-op if already frozen)
  return Object.freeze(obj);
}