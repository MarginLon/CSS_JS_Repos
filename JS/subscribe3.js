// 第三版

(function () {
    class Sub{

        // 实例私有属性
        pond = [];
    
        // 原型方法
        on(func) {
            let pond = this.pond;
            !pond.includes(func) ? pond.push(func) : null;

        }
        off(func) {
            let pond = this.pond;
            pond.forEach((item, index) => item === func ? pond[index] = null : null);
        }
        fire(...params) {
            let pond = this.pond;
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
        }
    }
    window.subscribe = () => new Sub;
})();

//==================
let sub1 = subscribe(),
    sub2 = subscribe();

    const fn1 = (x, y) => {
        console.log('fn1',x, y);
    }
    const fn2 = () => {
        console.log('fn2');
        sub1.off(fn1);
        sub1.off(fn2);
    }
    const fn3 = () => {
        console.log('fn3');
    }
    const fn4 = () => {
        console.log('fn4');
    }
    const fn5 = (x,y) => {
    console.log('fn5');
    }
sub1.on(fn1);
sub1.on(fn2);
sub1.on(fn3);
sub1.on(fn4);
sub1.on(fn5);
sub2.on(fn1);
sub2.on(fn3);

document.body.onclick = function () {
    sub1.fire(10, 20);
    sub2.fire(20, 30);
}