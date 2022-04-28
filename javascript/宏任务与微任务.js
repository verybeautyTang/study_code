/** 
 * setTimeout 为宏任务
 * promise为微任务
 * 微任务要优先于宏任务执行
 */


setTimeout(() => {
    console.log('i am setTimeout')
}, 0);
const b = new Promise((resolve, reject) => {
    console.log('my name is promise')
    resolve();
})
b.then(() => {
    console.log('my name is promise-then')
})
console.log('my name is window')



setTimeout(()=>console.log("d"), 0)
var r = new Promise(function(resolve, reject){
    resolve()
});
r.then(() => { 
    var begin = Date.now();
    while(Date.now() - begin < 1000);
    console.log("c1") 
    new Promise(function(resolve, reject){
        resolve()
    }).then(() => console.log("c2"))
});

function sleep(duration) {
    return new Promise(function(resolve, reject) {
        console.log("bb");
        setTimeout(resolve,duration);
    })
}
console.log("aa");
sleep(5000).then(()=>console.log("cc"));



function newSleep(duration) {
    return new Promise((resolve, reject) => {
        console.log('--------promise')
        setTimeout(resolve, duration);
    })
}
async function foo () {
    console.log('------before')
    await sleep(2000)
    console.log('------after')
}
foo()