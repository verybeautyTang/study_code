/** 原型继承 */
function Father () {
  this.names = ['mustang', 'beautyHe']
}
Father.prototype.getName = function () {
  return this.names
}
function  Child() {
  this.age = 23;
}
Child.prototype = new Father();

const child = new Child();

const child1 = new Child();

child.names.push('bob')

console.log(child.getName());

console.log(child1.getName());


/**
 * 构造函数继承
 */
const constructorFather = function (name) {
  this.name = name;
  this.hobby = ['swimming','singing']
}

const constructorChild = function (name) {
  constructorFather.call(this,name)
}

const consChild = new constructorChild('bob');
consChild.hobby.push('dancing');

const consChild1 = new constructorChild('kangkang');
consChild1.hobby.push('eating');

console.log('constructorFather', consChild.name);
console.log('constructorFather', consChild.hobby);

console.log('constructorFather', consChild1.name);
console.log('constructorFather', consChild1.hobby);



/**
 * 组合继承
 * 原型链继承 + 构造函数继承
 */

  function CombineFather (name) {
    this.name = name;
    this.hobby = ['swimming','singing']
  }
  CombineFather.prototype.getName = function () {
    return this.name;
  }
  const combineChild = function (name) {
    CombineFather.call(this,name)
  }
  combineChild.prototype = new CombineFather();
  combineChild.prototype.constructor = combineChild;

  const combChild = new combineChild('combine');
  combChild.hobby.push('dancing');
  console.log('combineFather', combChild.getName());
  console.log('combineFather', combChild.hobby);


  /**
   * 原型式继承
   */
  function objectCreat(o) {
    function F(){};
    F.prototype = o;
    return new F();
  }

  var resumez = {
    name: 'lover',
    age: 23,
    hobby: ['singing','dancing'],
  };

  var myResume = objectCreat(resumez);

  console.log(myResume.name)



  // 寄生继承
  function parasitismFunc (o) {
    const clone = Object.create(o);
    clone.consoleName = function () {
      console.log('我加强了对象数据')
    };
    return clone;
  }

  parasitismFunc(resumez).consoleName();
  // console.log(first)


  // 寄生组合继承
  
  function parasitismCompFather(name) {
    this.name = name
    this.hobby = ['dance', 'swimming', 'eat']
  } 

  parasitismCompFather.prototype.getName = function () {
    console.log(this.name)
  };
  
  function parasitismCompChild (name, age) {
    parasitismCompFather.call(this, name);
    this.age = age;
  }

  function getNewFunction () {
    const F = function () {};
    F.prototype = parasitismCompFather.prototype
    return new F();
  }

  parasitismCompChild.prototype = getNewFunction();

  const childs = new  parasitismCompChild('beautyTang', 23);
  console.log(childs)
  childs.getName()



