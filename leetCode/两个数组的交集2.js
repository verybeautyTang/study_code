/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const res = []
    nums2.forEach((item) => {
        const index = nums1.indexOf(item)
        if (index !== -1){
            res.push(item);
            nums1[index] = null;
        }
    })
    return res;
    // const nums_one = nums1.sort();
    // const nums_two = nums2.sort();
    // let data =[]
    // let i = j = 0;
    // while(i < nums_one.length && j < nums_two.length) {
    //     if(nums_one[i] === nums_two[j]) {
    //         data.push(nums_one[i]);
    //         i++;
    //         j++
    //     } else if(nums_one[i] > nums_two[j]) {
    //         j++
    //     } else {
    //         i++
    //     }
    // }
    // return data;
};
