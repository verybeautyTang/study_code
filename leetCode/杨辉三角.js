/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
if(numRows > 30 || numRows < 1) return false;
let data = []
for(let i =0 ; i< numRows; i++) {
    let singleData =[];
    if(!data.length) {
        singleData.push(1)
    } else {
        singleData.push(1)
        const lastData = data[data.length -1]
        lastData.forEach((j,index) => {
            if(data[data.length -1].length !== index +1) {
                singleData.push(j+ data[data.length -1][index + 1])
            }
        })
        singleData.push(1)
    }
    data.push(singleData)
}
return data
};
