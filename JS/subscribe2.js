// 第二版

let sub = (function () {
    //创建自定义事件池
    let pond = {};

    // 订阅/移除/通知
    const on = function on(event, func) {
        !pond.hasOwnProperty(event) ? pond[event] = [] : null;
        let arr = pond[event];
        //去重
        !arr.includes(func) ? arr.push(func) : null;
     };
    const off = function off(event, func) {
        let arr = pond[event];
        if (!arr) return;
        for (let i = 0; i < arr.length; i++){
            if (pond[i] === func) {
                arr[i] = null;
                break;
            }
        }
     };
    const fire = function fire(event, ...params) {
        let arr = pond[event];
        if (!arr) return;
        for (let i = 0; i < arr.length; i++) {
            let itemFunc = arr[i];
            if (typeof itemFunc !== "function") {
                //移除
                arr.splice(i, 1);
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
}
const fn3 = () => {
    console.log('fn3');
}


document.body.onclick = function () {
    sub.fire('BODY-CLICK',10, 20);
}

sub.on('BODY-CLICK',fn1);
sub.on('BODY-CLICK',fn2);
sub.on('BODY-CLICK',fn3);


// =============

