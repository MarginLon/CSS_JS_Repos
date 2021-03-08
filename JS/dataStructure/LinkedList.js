function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };
    var length = 0;
    var head = null;

    this.append = function (element) { 
        // 向列表尾添加新项
        var node = new Node(element),
            current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;       

    };
    this.insert = function (position, element) { 
        // 向列表的特定位置插入一个新的项
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

            }
            length++;
            return true;
        } else {
            return false;
        }
    };
    this.removeAt = function (position) {
        //从列表中特定位置移除一项
        if (position > -1 && position < length) { // 边界检查
            var current = head,
                previous,
                index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;

            return current.element;
        } else {
            return null;
        }
    };

    this.remove = function (element) {
        //从列表中移除一项
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.indexOf = function (element) {
        //返回索引 or -1
        var current = head,
            index = -1;
        
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.isEmpty = function () {
        // 判空
        return length === 0;
    };
    this.size = function () {
        // 元素个数
        return length;
    };
    this.toString = function () {
        // 重写，只输出元素
        var current = head,
            string = '';
        while (current) {
            string = current.element;
            current = current.next;
        }
        return string;
    };
    this.print = function () { };
    this.getHead = function () { }
        return head;
}

var list = new LinkedList();
list.append(15);
list.append(18);
console.log(list.size());


