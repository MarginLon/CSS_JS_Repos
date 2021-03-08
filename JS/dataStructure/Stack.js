// function

/**
 * push(elements(s)) : 添加n个新元素
 * pop() ：移除栈顶元素并返回
 * peek(): 返回栈顶元素
 * isEmpty(): 空为true
 * clear():清空
 * size()：返回个数
 */

function Stack() {
    var items = []
    this.push = function (element) {
        items.push(element);
    };
    this.pop = function(){
        return items.pop();
    };
    this.peek = function(){
        return items[items.length-1];
    };
    this.isEmpty = function(){
        return items.length == 0;
    };
    this.size = function(){
        return items.length;
    };
    this.clear = function () {
        items = [];
    };
    this.print = function(){
        console.log(items.toString());
    };
}

var stack = new Stack();
console.log(stack.isEmpty());

// 10进制->2进制
function divideBy2(decNumber){
    var remStack = new Stack(),
    rem,
    binaryString = '';
    while (decNumber > 0){ //{1}
    rem = Math.floor(decNumber % 2); //{2}
    remStack.push(rem); //{3}
    decNumber = Math.floor(decNumber / 2); //{4}
    }
    while (!remStack.isEmpty()){ //{5}
    binaryString += remStack.pop().toString();
    }
    return binaryString;
}

function baseConverter(decNumber, base){
    var remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF'; //{6}
    while (decNumber > 0){
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
    }
    while (!remStack.isEmpty()){
    baseString += digits[remStack.pop()]; //{7}
    }
    return baseString;
}
