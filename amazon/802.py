# https://leetcode.com/problems/find-eventual-safe-states

from typing import List

class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        safe_nodes = set()
        visited = set()

        def dfs(node):
            if node in visited:
                return node in safe_nodes

            visited.add(node)
            
            if len(graph[node]) == 0:
                safe_nodes.add(node)
                return True
            
            for adj_node in graph[node]:
                if adj_node in visited:
                    if adj_node not in safe_nodes:
                        return False
                    else:
                        continue

                if not dfs(adj_node):
                    return False
            
            safe_nodes.add(node)
            return True
        
        for node in range(len(graph)):
            if node not in visited:
                dfs(node)

        return sorted(list(safe_nodes))