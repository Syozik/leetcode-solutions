// leetcode.com/problems/middle-of-the-linked-list

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

function middleNode(head: ListNode | null): ListNode | null {
    let result: ListNode | null = head;
    let length: number = 0;
    while (head){
        length += 1;
        head = head.next;
    }

    let n = Math.floor(length / 2);
    while (n>0){
        result = result.next;
        n--;
    }

    return result;
};