# https://leetcode.com/problems/spiral-matrix/

from typing import List

def change_direction(vector):
    match vector:
        case [0,1]:
            return [1,0]
        case [1,0]:
            return [0,-1]
        case [0,-1]:
            return [-1,0]
        case [-1,0]:
            return [0,1]
    
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        vector: List = [0, 1]
        result: List = []
        [m,n] = [len(matrix), len(matrix[0])]
        x, y = [0, -1]
        k = (m)*(n)
        while k!=0:
            for _ in range(m*abs(vector[0]) + abs(n*vector[1])):
                x += vector[0]
                y += vector[1]
                result.append(matrix[x][y])
                k-=1
                if k == 0:
                    break
                
            m -= abs(vector[1])
            n -= abs(vector[0])
            vector = change_direction(vector)
            
        return result
        

solution = Solution()
print(solution.spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[21,22,23,24]]))

# 1   2  3  4
# 5   6  7  8
# 9  10 11 12
# 13 14 15 16 
# 17 18 19 20
# 21 22 23 24

# 1 2 3 4 8 12 16 20 24 23 22 