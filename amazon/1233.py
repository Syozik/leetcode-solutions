# leetcode.com/problems/remove-sub-folders-from-the-filesystem/

class Solution:
    def removeSubfolders(self, folder: List[str]) -> List[str]:
        folder.sort(key=lambda s: len(s))
        folders = set()
        for i in folder:
            parent_folders = i.split("/")
            path = ""
            is_subfolder = False
            for j in parent_folders:
                path += j
                if path in folders:
                    is_subfolder = True
                    break
                path += "/"
            if not is_subfolder:
                folders.add(i)

        return list(folders)