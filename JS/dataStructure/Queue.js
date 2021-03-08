// FIFO
// function
/**
enqueue(element(s))：向队列尾部添加一个（或多个）新的项。
dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
front()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。
isEmpty()：如果队列中不包含任何元素，返回true，否则返回false。
size()：返回队列包含的元素个数，与数组的length属性类似。
 */

function Queue() {
    var items = [];
    this.enqueue = function (element) {
        return items.push(element);
    };
    this.dequeue = function () {
        return items.shift();
    }
    this.front = function () {
        return items[0];
    }
    this.isEmpty = function () {
        return items.length == 0;
    }
    this.clear = function(){
        items = [];
    };
    this.size = function () {
        return items.length;
    }
    this.print = function () {
        console.log(items.toString());
    }
}
var queue = new Queue();
queue.enqueue("John");
queue.enqueue("Jack");

// 优先队列
function priorityQueue() {
    var items = [];
    function queueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function (element, priority) {
        var queueElement = new queueElement(element, priority);
        
        if (this.isEmpty()) {
            items.push(queueElement);
        } else {
            var added = false;
            for (var i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(queueElement);
            }
        }
    };
    this.dequeue = function () {
        return items.shift();
    }
    this.front = function () {
        return items[0];
    }
    this.isEmpty = function () {
        return items.length == 0;
    }
    this.clear = function(){
        items = [];
    };
    this.size = function () {
        return items.length;
    }
    this.print = function () {
        console.log(items.toString());
    }
}

// 循环队列 --击鼓传花

function hotPotato(nameList, num) {
    var queue = new Queue(); // 1
    for (var i = 0; i < nameList.length; i++){
        queue.enqueue(nameList[i]);// 2
    }
    var eliminated = '';
    while (queue.size() > 1) {
        for (var i = 0; i < num; i++){
            queue.enqueue(queue.dequeue());// 3
        }
        eliminated = queue.dequeue(); // 4
        console.log(eliminated + "淘汰");

    }
    return queue.dequeue(); // 5 
}

var names = ['1', '2', '3', '4', '5'];
var winner = hotPotato(names, 1);
console.log("winner:" + winner);