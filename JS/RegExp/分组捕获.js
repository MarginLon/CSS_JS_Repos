//多次匹配 match不能匹配小分组信息
let str = "{0}年{1}月{2}日"
let reg = /\{(\d+)\}/g;

let aryBig = [],
    arySmall = [],
    res = reg.exec(str);
while (res) {
    let [big, small] = res;
    console.log([big, small]);
    aryBig.push(big);
    arySmall.push(small);
    res = reg.exec(str);
}
console.log(aryBig, arySmall);
