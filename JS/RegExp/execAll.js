// =》 编写一个方法execAll，执行1次可以把所有匹配的结果捕获到
~ function () {
    function execAll(str = "") {

        if (!this.global) return this.exec(str);

        let ary = [],
            res = this.exec(str);
        while (res) {
            ary.push(res[0]);
            res = this.exec(str);
        }
        return ary.length === 0 ? null : ary;
    }
    RegExp.prototype.execAll = execAll;
}();

let reg = /\d+/g;
console.log(reg.execAll("Mar1997@2021gin"));
console.log("Mar1997@2021gin".match(reg));