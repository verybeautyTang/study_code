/**
 * js是弱类型，也是动态语言。
 */
/**
 * string类型跟任何类型相加都会变成是string类型，
 * 在其他情况下，number类型跟任何类型相加都会变成是number类型，但是undefined不能和string类型相加，undefined会转换成NAN
 */
console.log(1 + '1');
console.log(1 +  true);
console.log(1 +  false);
console.log(1 + undefined);
console.log(1 + null);
console.log('lucas' + true);

/**
 * 复杂数据类型，会先将其转换成基本数据类型，然后再进行相加
 * 一般都是用valueOf()方法或者toString()方法
 * 主观上说，具体调用哪种方法还是要看对象更倾向转化成哪种类型
 */

const foo = {
  valueOf () {
    return 12342;
  },
  toString () {
    return 'toString';
  }
}
alert(foo) // toString
console.log(foo + 1) // valueOf


/**
 * 加法运算规则
 * NAN + NAN = NAN
 * NAN + 0 = NAN
 * Infinity + Infinity = Infinity
 * -Infinity + -Infinity = -Infinity
 * -Infinity + Infinity = NAN
 */
