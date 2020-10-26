// 第一版

let sub = (function () {
    //创建自定义事件池
    let pond = [];

    // 订阅/移除/通知
    const on = function on(func) {
        //去重
        for (let i = 0; i < pond.length; i++){
            if (pond[i] === func) {
                return;
            }
        }
        pond.push(func);
     };
    const off = function off(func) {
        for (let i = 0; i < pond.length; i++){
            if (pond[i] === func) {
                // 数组塌陷
                // pond.splice(i, 1);
                pond[i] = null;
                break;
            }
        }
     };
    const fire = function fire(...params) {
        for (let i = 0; i < pond.length; i++) {
            let itemFunc = pond[i];
            if (typeof itemFunc !== "function") {
                //移除
                pond.splice(i, 1);
                i--;
                continue;
            }
            itemFunc(...params);
        }
    };

    return {
        on,
        off,
        fire
    };
})();

//=========

const fn1 = (x, y) => {
    console.log('fn1',x, y);
}
const fn2 = () => {
    console.log('fn2');
    sub.off(fn1);
    sub.off(fn2);
}
const fn3 = () => {
    console.log('fn3');
}


document.body.onclick = function () {
    sub.fire(10, 20);
}

sub.on(fn1);
sub.on(fn2);
sub.on(fn3);
