// leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    let alreadyVisited: Set<ListNode> = new Set();
    while (head){
        if (alreadyVisited.has(head))
            return true;

        alreadyVisited.add(head);
        head = head.next;
    }
    return false;
};