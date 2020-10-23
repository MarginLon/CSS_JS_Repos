//重写 instanceof
// obj 要检测的实例（不支持原始值）
// constructor 要检测的类（必须为函数）

function instance_of(obj, constructor) {
    if (obj == null || !/^(object|function)$/i.test(typeof obj)) return false;
    if (typeof constructor !== "function") throw new TypeError("Right-hand side of 'instanceof' is not callable");

    let proto = Object.getPrototypeOf(obj), //obj.__proto__ === Object.getPrototypeOf(obj)
        prototype = constructor.prototype;
    while (true) {
        // 找到Object.prototype.__proto__ 都没有相等的，证明不是当前类的实例
        if (proto === null) return false;
        // 找到对象原型链包含类的原型，则证明对象是类的一个实例
        if (proto === prototype) return true;
        // 层层寻找
        proto = proto.__proto__;

    }
}

console.log(instance_of([], Array));