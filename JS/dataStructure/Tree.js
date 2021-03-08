function BinarySearchTree() {
    
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    
    // 插入
    this.insert = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    // 遍历

    // 中序
    this.inOrderTraverse = function (callback) {

        var inOrderTraverseNode = function (node, callback) {
            if (node !== null) {
                inOrderTraverseNode(node.left, callback);
                callback(node.key);
                inOrderTraverseNode(node.right, callback);
          }  
        };

        inOrderTraverseNode(root, callback);
    }

    // 先序
    this.preOrderTraverse = function (callback) {
        
        var preOrderTraverseNode = function (node, callback) {
            if (node !== null) {
                callback(node.key);
                preOrderTraverseNode(node.left, callback);
                preOrderTraverseNode(node.right, callback);
            }
        };
        preOrderTraverseNode(root,callback)
    }

    //后序
    this.postOrderTraverse = function (callback) {
        
        var postOrderTraverseNode = function (node, callback) {
            if (node !== null) {
                postOrderTraverseNode(node.left, callback);
                postOrderTraverseNode(node.right, callback);
                callback(node.key);
            }
        };
        
        postOrderTraverseNode(root, callback);
    }

    // 搜索值
    
    // min
    this.min = function () {
        var minNode = function (node) {
            if (node) {
                while (node && node.left !== null) {
                    node = node.left;
                }
                return node.key;
            }
            return null;
        };
        return minNode(root);
    };

    // max
    this.max = function () {
        var maxNode = function (node) {
            if (node) {
                while (node && node.right !== null) {
                    node = node.left;
                }
                return node.key;
            }
            return null;
        };

        return maxNode(root);
    };

    //search
    this.search = function (key) {
        var searchNode = function (node, key) {
            if (node === null) {
                return false;
            }
            if (key < node.key) {
                return searchNode(node.left, key);
            } else if (key > node.key) {
                return searchNode(node.right, key);
            } else {
                return true;
            }
        };
        return searchNode(root, key);
    };

    //remove
    this.remove = function (key) {
        var removeNode = function (node, key) {
            if (node === null) {
                return null;
            }
            if (key < node.key) {
                node.left = removeNode(node.left, key);
                return node;
            } else if (key > node.key) {
                node.right = removeNode(node.right, key);
                return node;
            } else {
                //第一种情况-一个叶子节点
                if (node.left === null && node.right === null) {
                    node = null;
                    return node;
                }

                //第二种情况-一个只有一个子节点的节点
                if (node.left === null) {
                    node = node.right;
                    return node;
                } else if (node.right === null) {
                    node = node.left;
                    return node;
                }

                //第三章情况-一个有两个子节点的节点
                var findMinNode = function () {
                    var minNode = function (node) {
                        if (node) {
                            while (node && node.left !== null) {
                                node = node.left;
                            }
                            return node;
                        }
                        return null;
                    };
                    return minNode(root);
                };
                var aux = findMinNode(node.right);
                node.key = aux.key;
                node.right = removeNode(node.right, aux.key);
                return node;
            }
        };
        root = removeNode(root, key);  
    };
}



var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);

function printNode(value) {
    console.log(value);
}
tree.inOrderTraverse(printNode);
console.log("中序完成");
tree.preOrderTraverse(printNode);
console.log("先序完成");
tree.postOrderTraverse(printNode);
console.log("后序完成");
console.log(tree.min());
console.log(tree.max());
console.log(tree.search(5));
console.log("搜索完成");