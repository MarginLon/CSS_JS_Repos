(function () {
    // PromiseAPlus
    function Promise(executor) {
        // 保证executor是函数
        if (typeof executor !== "function") {
            throw new TypeError('Promise resolver' + executor + 'is not a function');
        }

        // self:存储的是Promise实例
        var self = this;
        self.PromiseState = "pending";
        self.PromiseResult = undefined;
        self.onFulfilledCallbacks = [];
        self.onRejectedCallbacks = [];

        //执行resolve/reject都是修改当前实例的状态和结果
        // 状态一旦被更改，不能被再次修改
        var run = function run(state, result) {
            if (self.PromiseState !== "pending") return;
            self.PromiseState = state;
            self.PromiseResult = result;
            // 执行resolve/reject的时候，立即更改状态信息，但是不会立即通知方法执行（异步）
            setTimeout(function () {
                var arr = state === "fulfilled" ? self.onFulfilledCallbacks : self.onRejectedCallbacks;
                for (var i = 0; i < arr.length; i++) {
                    let itemFunc = arr[i];
                    if (typeof itemFunc === "function") {
                    itemFunc(self.PromiseResult);
                    }
            }
            })
            
        };
        var resolve = function resolve(value) {
            run("fulfilled", value);
        };
        var reject = function reject(reason) {
            run("rejected", reason);
         };

        // 立即执行executor：如果函数执行报错，promise状态也要改为失败
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
        
        //统一处理基于THEN返回新实例的成功和失败
    function resolvePromise(promise, x, resolve, reject) {

        if (x === promise) {
            throw new TypeError("Chaining cycle detected for promise #<Promise>");
        }
        if (x !== null && typeof x === "object" || typeof x === "function") {
            try {
                var then = x.then;
                if (typeof then === "function") {
                    //返回结果为新的Promise实例
                    then.call(x, function (y) { 
                        resolve(y);
                    }, function (r) {
                        reject(r);
                    });
                } else {
                    resolve(x);
                }
            } catch (err) {
                reject(err);
            }
        }

        else {
            resolve(x);
        }
    }
        //Promise原型
    Promise.prototype = {
        customize: true,
        constructor: Promise,
        then: function (onfulfilled, onrejected) {
            //处理onfulfilled / onrejected 不传递值得情况
            if (typeof onfulfilled !== "function") {
                onfulfilled = function onfulfilled(value) {
                    return value;
                };
            }
            // ...

            // 根据状态不同，执行不同的方法，处理不同的事情
            // 执行then，即使已知状态，也不是立即把onfunfilled / onrejected执行，需要用定时器设置异步，不设置等待时间
            // 执行then，还不清楚状态（例如，executor中异步操作）：先把基于THEN传入的方法onfulfilled/onrejected存储起来（可以做去重处理）
            //      在以后执行resolve / reject函数的时候，通知方法执行！
            // 
            var self = this;
            var promise = new Promise(function (resolve, reject) { 
                switch (self.PromiseState) {
                    case "fulfilled":
                        setTimeout(function () {
                            try {
                                let x = onfulfilled(self.PromiseResult);

                            } catch (err) {
                                reject(arr);
                            }
                        });
                        break;
                    case "rejected":
                        setTimeout(function () {
                            try {
                                let x =  onrejected(self.PromiseResult);
                                   
                            } catch (err) {
                                reject(arr);
                            }
                        });
                        break;
                    default:
                        // 把onfulfilled / onrejected放入不同容器，后期知道状态，通知某个容器的方法执行
                        // 最后执行的是存储起来的onfulfilled / onrejected
                        // self.onFulfilledCallbacks.push(onfulfilled);
                        // self.onRejectedCallbacks.push(onrejected);     

                        // 下面方案：先存匿名函数，状态改变，再执行匿名函数（给匿名函数传递PromiseResult），
                        // 我们在匿名函数中再把最后需要执行的onfulfilled / onrejected执行，可以监听执行是否报错和返回值
                        self.onFulfilledCallbacks.push(function () {
                            try {
                                var x = onfulfilled(PromiseResult);
                            } catch (err) {
                                reject(err);
                            }
                        });
                        self.onRejectedCallbacks.push(function () {
                            try {
                                var x =  onrejected(PromiseResult);
                            } catch (err) {
                                reject(err);
                            }
                           
                        });    
                }
            });
            return promise;
           
        },
        catch: function () {
            // 相当于 .then(null,onrejected)
        }
    };

    // Promise对象
    Promise.resolve = function resolve(value) {
        return new Promise(function (resolve){
            resolve(value);
        });  
    };

    Promise.reject = function reject(reason) {
        return new Promise(function (_, reject){
            reject(reason);
        });  
    };
    Promise.all = function all() { };
    Promise.race = function race() { };

    window.Promise = Promise;
})();

let p1 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve('OK');
        console.log(2);
    }, 1000);
    // reject('NO');
});



let p2 = p1.then(value => {
    console.log('成功', value);
    return 10;
}, reason => {
    console.log('失败', reason);    
    return 0;
});

let p3 = p2.then(value => {
    console.log('成功', value);
    return Promise.reject(100);
}, reason => {
        console.log('失败', reason);   
        return 0;    
});

p3.then(value => {
    console.log('成功', value);
}, reason => {
    console.log('失败',reason);
});

// 测试同步异步
console.log(1);

