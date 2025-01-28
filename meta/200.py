# leetcode.com/problems/number-of-islands

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        visited = [[False] * len(grid[0]) for _ in range(len(grid))]
        directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    
        def dfs(i, j):
            visited[i][j] = True
            for dx, dy in directions:
                x = i + dx
                y = j + dy
                if (x >= 0 and x < len(grid) and y >= 0 and y < len(grid[0]) and grid[x][y] != "0" and not visited[x][y]):
                    dfs(x, y)

        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if not visited[i][j] and grid[i][j] == "1":
                    dfs(i, j)
                    count += 1
        
        return count