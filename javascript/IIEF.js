void function () {
   console.log('first') 
}();

(function () {
    console.log('second')
})();

var b;
void function () {
    var env = {b: 1};
    b = 2;
    console.log('i am IIEF', b);
    with(env) {
        b = 3;
        console.log(env.__proto__)
        console.log('i am with', env)
    }
}()
console.log('i am global', b)

function* names () {
    console.log('my name is function *')
}
function  noName() {
    console.log('my name is mo function')
}
names()
noName()