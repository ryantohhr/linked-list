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
            node.prevNode = this.lastNode;
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
            this.firstNode.prevNode = node;
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
        this.lastNode.prevNode.nextNode = null;
        this.lastNode = this.lastNode.prevNode;
    }

    contains(value) {
        const first = this.firstNode;
        if (first.value === value) {
            return true;
        } else {
            let next = first;
            while (next.nextNode) {
                next = next.nextNode;
                if (next.value === value) {
                    return true;
                }
            }
            return false;
        }
    }

    find(value) {
        const first = this.firstNode;
        let index = 0;
        if (first.value === value) {
            return index;
        } else {
            let next = first;
            while (next.nextNode) {
                next = next.nextNode;
                index++;
                if (next.value === value) {
                    return index;
                }
            }
            return null;
        }
    }

    toString() {
        let string = "";
        let next = this.firstNode;
        while (next) {
            string += `( ${next.value} ) -> `
            next = next.nextNode;
        }
        string += "null";
        return string;
    }

    insertAt(value, index) {
        const node = new Node(value);
        if (index === 0) {
            node.nextNode = this.firstNode;
            this.firstNode = node;
        } else if (index === this.size()) {
            node.prevNode = this.lastNode;
            this.lastNode.nextNode = node;
            this.lastNode = node;
        } else {
            let next = this.firstNode;
            for (let i = 0; i < index; i++) {
                next = next.nextNode;
            }
            node.nextNode = next
            next.prevNode.nextNode = node;
        }
        
    }

    removeAt(index) {
        if (index === 0) {
            this.firstNode.nextNode.prevNode = null;
            this.firstNode = this.firstNode.nextNode;
        } else {
            let next = this.firstNode;
            for (let i = 0; i < index; i++) {
                next = next.nextNode;
            }
            next.prevNode.nextNode = next.nextNode;
            next.nextNode.prevNode = next.prevNode;
        }
        
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
        this.prevNode = null;
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());