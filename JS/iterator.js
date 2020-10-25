class Iterator {
    constructor(arr) {
        this.arr = arr;
        this.index = 0;
    }
    next() {
        let index = this.index,
            arr = this.arr;
        if (index > this.arr.length - 1) {
            return {
                done: true,
                value: undefined
            };
        }
        return {
            done: false,
            value: arr[this.index++]
        }
        
    }
}

let arr = [10, 20, 30];
let itor = new Iterator(arr);
console.log(itor.next());
console.log(itor.next());
console.log(itor.next());
console.log(itor.next());

// for of
arr[Symbol.iterator] = function () {
    let index = 0,
        self = this;
    return {
        next() {
            // console.log('OK');
            if (index > self.length - 1) {
                return {
                    done: true,
                    value: undefined
                };
            }
            let result= {
                done: false,
                value: self[index++]
            };
            return result;
        }
    }
}
for (let item of arr) {
    console.log(item);
}

//基于for...of... 遍历对象
// 法1：手动设置Symbol.iterator

// 法2： [Symbol.iterator]:Array.prototype[Symbol.iterator]

// 法3： Object.prototype[Symbol.iterator]

Object.prototype[Symbol.iterator] = function () {
    let self = this,
        keys = [
            ...Object.getOwnPropertyNames(self),
            ...Object.getOwnPropertySymbols(self)
        ],
        index = 0;
    return {
        next() {
            return index > keys.length - 1 ? {
                done: true,
                value: undefined
            } : {
                    done: false,
                    value: self[keys[index++]]
                };
        }
    };
};


