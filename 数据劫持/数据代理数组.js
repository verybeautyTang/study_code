const data = {
    name: 'hsy',
    age: 23,
    hobby: 'watch tv',
    project:['ydxs','cdp'],
    technology: {
        title: 'js',
        name:'前端js开发'
    }
}

const arrExtend = Object.create(Array.prototype)
const reWriteArr = ['push','pop','shift','splice','sort','reverse','unshift']
reWriteArr.forEach((method) => {
    const oldArr = Array.prototype[method];
    const newArr = function (...args) {
        oldArr.apply(this, args);
        console.log(`${method}方法被执行了`)
    }
    arrExtend[method] = newArr
})
Array.prototype =  Object.assign(Array.prototype, arrExtend);
// const abc = [1,2,3,4]
// abc.push(5)
const observer = (data) => {
    if(!data || typeof data !== 'object' ) return ;
    Object.keys(data).forEach(key => {
        let currentData = data[key];
        observer(currentData)
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: false,
            get () {
                console.log(`我是get方法，当前的数据是${currentData}`);
                return currentData;
            },
            set (newVal) {
                currentData = newVal;
                console.log(`我是set方法，当前的new数据是${currentData}`)
                return currentData;
            }
        })
    });
}
// data.name  = 'wyx';
observer(data);
// data.technology.title = 'ts'
// data.project
data.project.push('new_company');
// data.project;