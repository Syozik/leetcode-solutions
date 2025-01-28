# https://leetcode.com/problems/search-a-2d-matrix/?envType=study-plan-v2&envId=top-interview-150

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        row_start = 0
        row_end = len(matrix) - 1
        
        while row_end - row_start > 1:
            m = int((row_end + row_start)/2)
            
            if matrix[m][0] > target:
                row_end = m
            else:
                row_start = m

        if target <= matrix[row_start][-1]:
            row = row_start
        else:
            row = row_end

        col_start = 0
        col_end = len(matrix[0]) - 1
        while col_end - col_start > 1:
            m = int((col_end + col_start)/2)

            if matrix[row][m] == target:
                return True

            if matrix[row][m] > target:
                col_end = m
            else:
                col_start = m

        return matrix[row][col_start] == target or matrix[row][col_end] == target