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