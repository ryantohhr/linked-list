class LinkedList {
    constructor() {
        this.firstNode = null;
        this.lastNode = null;
    }

    append(value) {
        const node = new Node(value);
        if (!this.firstNode) {
            this.firstNode = node;
            this.lastNode = node;
        } else {
            this.lastNode.nextNode = node;
            this.lastNode = node;
        }
    }

    prepend(value) {
        const node = new Node(value);
        if (!this.firstNode) {
            this.firstNode = node;
            this.lastNode = node;
        } else {
            node.nextNode = this.firstNode;
            this.firstNode = node;
        }
    }

    size() {
        const first = this.firstNode;
        let size = 0;
        if (!first) {
            return size;
        } else {
            let next = first.nextNode;
            size++;
            if (!next) {
                return size;
            } else {
                while (next) {
                    next = next.nextNode;
                    size++;
                }
                return size;
            }            
        }
        
    }

    head() {
        return this.firstNode;
    }

    tail() {
        return this.lastNode;
    }

    at(index) {
        const first = this.firstNode;
        if (index === 0) {
            return first;
        } else {
            let next = first;
            for (let i = 0; i < index; i++) {
                next = next.nextNode;
            }
            return next;
        }
    }

    pop() {
        
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

const list = new LinkedList();
list.append(5);
list.prepend(3);
list.append(7);
list.pop();
console.log(list);

const oneTwo = new LinkedList();
oneTwo.append(1);
oneTwo.append(2);
oneTwo.pop();