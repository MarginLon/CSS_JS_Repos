// test
// RegExp.$1~RegExp.$9 获取当前正则匹配后，第一个到第九个分组的信息
let str = "{0}年{1}月{2}日";
let reg = /\{(\d+)\}/g;
console.log(reg.test(str));
console.log(RegExp.$1);


//replace 
let str = "Margin|Margin_D"
str1 = str.replace("Margin", "龙sir").replace("Margin", "龙sir");
console.log(str1);

str2 = str.replace(/Margin/g, "龙sir");
console.log(str2);
// 案例：处理时间字符串
let time = "2021-05-01"
let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
time = time.replace(reg, "$1年$2月$3日");
console.log(time);
    //1.reg和time捕获 匹配一次就执行一次传递的函数
    //2.replace还给方法传递了实参信息
    //3.函数返回内容即为大正则替换内容 
let time = "2021-05-01"
let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
// time = time.replace(reg, (big,$1,$2,$3) => {
//     console.log(big,$1,$2,$3);
// });
time = time.replace(reg, (big,...arg) => {
    let [$1, $2, $3] = arg;
    $2.length < 2 ? $2 = "0" + $2 : null;
    $3.length < 2 ? $3 = "0" + $3 : null;
    return $1 + "年" + $2 + "月" + $3 + "日";
});
console.log(time);
//单词首字母大写
let str = "good good study, day day up.";
let reg = /\b([a-zA-Z])[a-zA-Z]*\b/g;
str = str.replace(reg, (...arg) => {
    let [content, $1] = arg;
    $1 = $1.toUpperCase();
    content = content.substring(1);
    return $1 + content;
});
console.log(str);