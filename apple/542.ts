// https://leetcode.com/problems/01-matrix/

function updateMatrix(mat: number[][]): number[][] {
    const [m, n] = [mat.length, mat[0].length];
    let result: number[][] = [];
    let queue: number[][] = [];
    const directions:number[][] = [[1, 0],[-1,0], [0,1], [0,-1]];
    for (let i = 0; i<m; i++){
        result[i] = [];
        for (let j = 0; j<n; j++){
            if (mat[i][j] === 0){
                queue.push([i, j]);
                continue;
            }
            else{
                mat[i][j] = Infinity;
            }
        }
    }

    while (queue.length > 0){
        let [row, col] = queue.shift() || [0,0];
        for (let [dx, dy] of directions){
            let newRow = row + dx;
            let newCol = col + dy;
            if (newRow >=0 && newRow < m && newCol >= 0 && newCol < n && mat[newRow][newCol] > mat[row][col] + 1){
                mat[newRow][newCol] = mat[row][col] + 1;
                queue.push([newRow, newCol]);
            }
        }
    }
    return mat;
};

console.log(updateMatrix([[1,1,1],[1,1,0],[1,1,1]]));