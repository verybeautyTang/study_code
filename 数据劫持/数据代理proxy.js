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

const observer = (data) => {
    if (!data || Object.prototype.toString.call(data) !== '[object Object]') return;
    Object.keys(data).forEach((key) => {
        let currentData = data[key]
        if (typeof currentData === 'object') {
            observer(currentData);
            data[key] = new Proxy(currentData, {
                set(target, prototype, value, receiver) {
                    if (prototype !== 'length') {
                        console.log(`我是proxy方法，当前的${key}对应的value是${currentData}`)
                    } 
                    return Reflect.set(target, prototype, value, receiver)
                }
            })
        } else {
            Object.defineProperty(data,key, {
                enumerable: true,
                configurable: false,
                get () {
                    console.log(`我是defineProperty方法，当前的数据是${currentData}`);
                    return currentData
                },
                set (newVal) {
                    currentData = newVal;
                    console.log(`我是defineProperty方法，当前的${key}对应的新数据是${currentData}`);
                    return currentData
                }
            })
        }
    })
}
observer(data)
data.project.push('mylove')
data.name ='222'