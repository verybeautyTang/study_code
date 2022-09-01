/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    // 求矩阵咯
     let width = Math.floor(Math.sqrt(area));
    while (area % width !== 0) {
        --width;
    }
    return [Math.floor(area / width), width];
};
