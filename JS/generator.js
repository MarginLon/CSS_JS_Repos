// function* func() {
//     console.log('A');
//     yield 1;
//     console.log('B');
//     yield 2;
//     console.log('C');
//     yield 3;
//     console.log('D');
// }
// let iterator = func();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

const { resolve } = require("path");


// ======================
function* func() {
    let x = yield 1;
    console.log(x);
}
let iterator = func();
iterator.next();
iterator.next(10);


// =======================

function* func1() {
    yield 1;
    yield 2;
}

function* func2() {
    yield 3;
    yield* func1();
    yield 4;
}
let iterator = func2();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// =============================
function* func1() {
    console.log(this); //=> window
    this.NO = 'NO'; //不可调用
    yield 1;
    yield 2;
}
let itor = func1();
itor.next();
func1.prototype.OK = 'OK'; // 可调用
console.log(itor.OK);
console.log(itor.NO);

// ===============================
const func = x => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(++x);
        }, 1000);
    });
};

func(0).then(x => {
    console.log(x); //=>1
    return func(x);
}).then(x => {
    console.log(x); // =>2
    return func(x);
}).then(x => {
    console.log(x); // =>3
});

// =================================
const func = x => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(++x);
        }, 1000);
    });
};


// (async function annoymous() {
//     let x = await func(0);
//     console.log(x);

//     x = await func(x);
//     console.log(x);

//     x = await func(x);
//     console.log(x);
// })();


function* generator(x) {
    x = yield func(x);
    console.log(x); // 1

    x = yield func(x);
    console.log(x); // 2

    x = yield func(x);
    console.log(x); // 3
}

let iterator = generator(0);
let result = iterator.next();
result.value.then(x => {
    result = iterator.next(x);
    result.value.then(x => {
        result = iterator.next(x);
        result.value.then(x => {
            iterator.next(x);         
        });
    });
});

// generator:
// ...params: 初始执行generator传递的实参
function asyncFunc(generator, ...params) {
    const iterator = generator(...params);
    const next = x => {
        let {
            value,
            done
        } = iterator.next(x);
        if (done) return;
        value.then(x => { 
            next(x);
        });

    };
    next();
}
asyncFunc(generator, 0);