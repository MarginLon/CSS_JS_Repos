// fibonacci

var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) { 
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++){
    console.log(fibonacci[i]);
}


// function

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11];
console.log(numbers);
// push 向数组的末尾添加一个或更多元素，并返回新的长度。
// pop 删除并返回数组的最后一个元素
// unshift 向数组的开头添加一个或更多元素，并返回新的长度。
// shift 删除并返回数组的第一个元素
// splice 删除元素，并向数组添加新元素。
// concat 连接两个或更多的数组，并返回结果。
// every 对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true
// filter 对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组
// forEach 对数组中的每一项运行给定函数。这个方法没有返回值
// join 将所有的数组元素连接成一个字符串
// map 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
// slice 传入索引值，将数组里对应索引范围内的元素作为新数组返回
// some 对数组中的每一项运行给定函数，如果任一项返回true，则返回true
// sort 按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数

var isEven = function (x) {
    console.log(x);
    return (x % 2 == 0) ? true : false;
}

numbers.every(isEven);
numbers.some(isEven);

// reverse(); 反序
// sort(); 正序 字符串比较

numbers.sort(function (a, b) {
    return a - b;
});

console.log(numbers);

var friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 }
];

function comparePerson(a, b){
    if (a.age < b.age){
    return -1
    }
    if (a.age > b.age){
    return 1
    }
    return 0;
}

console.log(friends.sort(comparePerson));
