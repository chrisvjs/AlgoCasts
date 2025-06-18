// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data , next= null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const node = new Node(data);
        if (this.head == null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null
        }
        let node = this.head;

        while(node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head){
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head){
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let prev = this.head;
        let node = this.head.next;
        while(node.next) {
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }

    insertLast(data) {
        const lastNode = new Node(data);
        let node = this.getLast(this.head);
        if (node) {
            node.next = lastNode;
        } else {
            this.head = lastNode;
        }
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }
        let count = 0;
        let node = this.head;
        while(node) {
            if (count === index) {
                return node;
            }
            count++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return null;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        prev = this.getAt(index - 1);
        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);;
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, prev.next);
        prev.next = node;

    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
          fn(node, counter);
          node = node.next;
          counter++;
        }
      }

      *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
          yield node;
          node = node.next;
        }
      }
}

module.exports = { Node, LinkedList };
