//验证一个字符串中哪个字母出现的次数最多，并记录次数


/**
 * 去重
 */

/**
 * 排序
 */
let str = "ForWhomtheBellTolls"
str = str.split("").sort((a, b) => a.localeCompare(b)).join('');
console.log(str);
let reg = /([a-zA-Z])\1+/g;
let ary = str.match(reg);
console.log(ary);
ary.sort((a, b) => b.length - a.length);
console.log(ary);
console.log(`出现次数最多的是:${ary[0].slice(0, 1)},出现了${ary[0].length}`);

let max = ary[0].length,
    res = [ary[0].substr(0, 1)];
for (let i = 1; i < ary.length; i++) {
    let item = ary[i];
    if (item.length < max) {
        break;
    }
    res.push(item.substr(0, 1));
}
console.log(`出现次数最多的是:${res},出现了${max}`);

/**
 * 
 */
let str = "ForWhomtheBellTolls",
    max = 0,
    res = [],
    flag = false;
str = str.split("").sort((a, b) => a.localeCompare(b)).join('');

for (let i = str.length; i > 0; i--) {
    let reg = new RegExp("([a-zA-Z])\\1{" + i - 1 + "}", "g");

    str.replace(reg, (content, $1) => {
        res.push($1);
        max = i;
        flag = true;
    });
    if (flag) break;
}