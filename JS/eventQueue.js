//======================
 setTimeout(() => {
    console.log(1);
}, 20);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 10);
console.log(4);
// console.time('AA');
for (let i = 0; i < 90000000; i++) {
    // do soming
}
// console.timeEnd('AA'); //=>AA: 79ms 左右
console.log(5);
setTimeout(() => {
    console.log(6);
}, 8);
console.log(7);
setTimeout(() => {
    console.log(8);
}, 15);
console.log(9); 


//======================
 setTimeout(() => {
    console.log(1);
}, 0); //设置零也不是立即执行：而是需要等待浏览器最快的反应时间 谷歌4~6MS
console.log(2);
while (1) {
    // do somthing
    // 死循环会导致主线程永远结束不了：下面同步代码不会执行，所以的事件队列的任务都不会执行
}
console.log(3);
setTimeout(() => {
    console.log(4);
}, 10);
console.log(5); 


// ================================
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});
console.log('script end');





// ================================
 let body = document.body;
body.addEventListener('click', function () {
    Promise.resolve().then(() => {
        console.log(1);
    });
    console.log(2);
});
body.addEventListener('click', function () {
    Promise.resolve().then(() => {
        console.log(3);
    });
    console.log(4);
}); 

// ================================
 console.log('start');
let intervalId;
Promise.resolve().then(() => {
    console.log('p1');
}).then(() => {
    console.log('p2');
});
setTimeout(() => {
    Promise.resolve().then(() => {
        console.log('p3');
    }).then(() => {
        console.log('p4');
    });
    intervalId = setInterval(() => {
        console.log('interval');
    }, 3000);
    console.log('timeout1');
}, 0); 

// ================================
setTimeout(() => {
    console.log('a');
});
Promise.resolve().then(() => {
    console.log('b');
}).then(() => {
    return Promise.resolve('c').then(data => {
        setTimeout(() => {
            console.log('d')
        });
        console.log('f');
        return data;
    });
}).then(data => {
    console.log(data);
}); 

 // ================================
function func1() {
    console.log('func1 start');
    return new Promise(resolve => {
        resolve('OK');
    });
}

function func2() {
    console.log('func2 start');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('OK');
        }, 10);
    });
}

console.log(1);
setTimeout(async () => {
    console.log(2);
    await func1();
    console.log(3);
}, 20);
for (let i = 0; i < 90000000; i++) {} //循环大约要进行80MS左右
console.log(4);
func1().then(result => {
    console.log(5);
});
func2().then(result => {
    console.log(6);
});
setTimeout(() => {
    console.log(7);
}, 0);
console.log(8); 