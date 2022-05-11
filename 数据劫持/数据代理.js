const data = {
    name: 'hsy',
    age: 23,
    hobby: 'watch tv',
    technology: {
        title: 'js',
        name:'前端js开发'
    }
}

const observer = (data) => {
    if(!data || typeof data !== 'object' ) return ;
    Object.keys(data).forEach(key => {
        let currentData = data[key];
        observer(currentData)
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: false,
            get () {
                console.log(`当前的${key}对应的数据是${currentData}`)
            },
            set (newVal) {
                currentData = newVal;
                console.log(`当前的${key}对应的new数据是${currentData}`)
            }
        })
    });
}
// data.name  = 'wyx';
observer(data);
data.technology.title = 'ts'