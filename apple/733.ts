// https://leetcode.com/problems/flood-fill/description/

function floodFill(image: number[][], sr: number, sc: number, color: number, visited: Set<number[]> = new Set()): number[][] {
    let currColor: number = image[sr][sc];
    if (currColor === color)
        return image;
    let d: number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    image[sr][sc] = color;
    visited.add([sr, sc]);
    for (let [dx, dy] of d) {
        let [x, y] = [sr + dx, sc + dy];
        if (x < image.length && x >= 0 && y >= 0 && y < image[sr].length && image[x][y] === currColor && !visited.has([x, y])) {
            floodFill(image, x, y, color, visited);
        }
    }

    return image;
};