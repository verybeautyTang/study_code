/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    // 可以用最暴力的hash或者数组
    const hashWord = ['qwertyuiop','asdfghjkl','zxcvbnm']
    const data = []
    const getData = (index, temp) => {
        for(let j =0; j <temp.length; j++ ) {
                if(!hashWord[index].includes(temp[j])) return false
            } 
        return true
    }
    for(let i = 0; i < words.length; i++) {
        // 变成一个没有
        const temp  = [...new Set(words[i].toLowerCase())];
        if(hashWord[0].includes(temp[0])) {
            getData(0, temp) === true && data.push(words[i])
            
        }
         if(hashWord[1].includes(temp[0])) {
            getData(1, temp) === true && data.push(words[i])
        }
         if(hashWord[2].includes(temp[0])) {
            getData(2, temp) === true && data.push(words[i])
        }

    }
    return data;
};
