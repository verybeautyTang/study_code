/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

var dsf = function (image, sr, sc, newColor,oldcolor) {
    if(sr < 0 || sr > image.length || sc < 0 || !image[sr] || sc > image[sr].length || image[sr][sc] != oldcolor) return;
    image[sr][sc] = newColor
    dsf(image, sr, sc-1, newColor, oldcolor);
    dsf(image, sr, sc+1, newColor, oldcolor);
    dsf(image, sr-1, sc, newColor, oldcolor);
    dsf(image, sr+1, sc, newColor, oldcolor);
}
var floodFill = function(image, sr, sc, newColor) {
    if(newColor === image[sr][sc]) return image;

    dsf(image, sr, sc, newColor, image[sr][sc]);

    return image
};
