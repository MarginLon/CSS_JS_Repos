//基于ES6的class重构
function Modal(x, y) {
    this.x=x;
    this.y = y;
    this.n = 100;
}

Modal.prototype.z=10;
Modal.prototype.getX=function(){
    console.log(this.x);
}
Modal.prototype.getY=function(){
    console.log(this.y);
}
    // Model->普通对象: 私有属性和方法与实例无关
Modal.n=200;
Modal.setNumber=function(n){
    this.n=n;
};
// // let m = new Modal(10, 20);


class Modal {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // this.n = 100;
    }
    n = 100;

    //原型上公共方法（公共属性无法直接设置）
    getX() { console.log(this.x);}
    getY() { console.log(this.y);}

    //当作普通对象设置“静态”属性和方法
    static n = 200;
    static setNumber(n) {this.n=n;}
}
//原型上的公共属性提取到外面单独写
Modal.prototype.z = 10;

let m = new Modal(10, 20);