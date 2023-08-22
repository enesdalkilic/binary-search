const fs = require("fs");
class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.root == null) {
            return this.root = newNode
        } else {
            return this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.value > node.value) {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode);
            }
        } else {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode);
            }
        }
    }
    search(node, value) {
        if (node === null) {
            return null
        }
        if (node.value === value) {
            return node
        }
        if (node.value < value && value > node.right.value) {
            return node.value;
        }
            if (value > node.value) {
                return this.search(node.right, value);
            } else {
                return this.search(node.left, value);
            }

    }
}


class Node {
    constructor(value, data) {
        this.value = value;
        this.data = data || null
        this.left = null;
        this.right = null;
    }
}

let Bst = new BST();
Bst.insert(15);
Bst.insert(25);
Bst.insert(10);
Bst.insert(7);
Bst.insert(10);
Bst.insert(7);
Bst.insert(22);
Bst.insert(17);
Bst.insert(13);
Bst.insert(5);
Bst.insert(9);
Bst.insert(27);


let search = Bst.search(Bst.root, 15);
console.log(search)

fs.writeFileSync("./test.json", JSON.stringify(Bst.root, null, 4))