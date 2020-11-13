let inpBox = document.getElementById('inpBox');
let inpBox2 = document.getElementById('inpBox2');
let btn = document.getElementById('btn');

// 判断用户输入的数字，是正数还是负数   
//         btn.onclick = function () {
//             // 获取文本框中的内容：元素.value 
//             // 获取的结果是字符串，所以需要转换为数字
//             let n = inpBox.value;
//             n = Number(n);
//             // 接下里根据输入的内容进行相关验证，输出对应的结果
//             if (n > 0) {
//                 console.log('输入的是正数');
//             } else if (n < 0) {
//                 console.log('输入的是负数');
//             } else {
//                 console.log('输入的是零或者非法数字');
//             }
// }

// 判断输入的年份是闰年还是平年
// btn.onclick = function () {
//     // 获取文本框中的内容：元素.value 
//     // 获取的结果是字符串，所以需要转换为数字
//     let n = inpBox.value;
//     n = Number(n);
//     // 接下里根据输入的内容进行相关验证，输出对应的结果
//     if (n>0 && n % 4== 0 && n %100 != 0 || n>0 && n%400 == 0) {
//         console.log('输入的是闰年');
//     } else  {
//         console.log('输入的是平年');
//     } 
// }

// 判断输入的数字是偶数还是奇数 

// 根据输入的分数，判定成绩等级 
/* btn.onclick = function () {
    // 获取文本框中的内容：元素.value 
    // 获取的结果是字符串，所以需要转换为数字
    let n = inpBox.value;
    n = Number(n);
    // 接下里根据输入的内容进行相关验证，输出对应的结果
    if (n>=90) {
        console.log('优秀');
    } else  if (n>= 80){
        console.log('中等');
    } else if (n >= 70) {
        console.log('及格');
    } else {
        console.log('不及格');
    }
} */
/*
工作满 0 年,发月薪的 1 倍月薪年终奖，如果月薪大于 8000 ，那么就是发 1.2倍

 工作满 1 年,发月薪的 1.5 倍月薪年终奖，如果月薪大于 10000 ，那么就是发 1.7倍

 工作满 2 年甚至更多 ,发月薪的3 倍月薪年终奖，如果月薪大于 12000 ，那么就是发 3.2倍

编写JS程序，当用户输入自己的工作年限和薪资后，计算并且输出应得的年终奖~~
 */
btn.onclick = function () {
    // 获取文本框中的内容：元素.value 
    // 获取的结果是字符串，所以需要转换为数字
    let n = inpBox.value;
    n = Number(n);
    let m = inpBox2.value;
    m = Number(m);
    // 接下里根据输入的内容进行相关验证，输出对应的结果
    switch (n) {
        case 0:
            if (m > 0 && m < 8000) {
                console.log(m);
            }
            else {
                console.log(1.2 * m);
            }
            break;
        case 1:
            if (m > 0 && m < 10000) {
                console.log(1.5 * m);
            }
            else {
                console.log(1.7 * m);
            }
            break;
        default:
            if (m > 0 && m < 12000) {
                 console.log(3 * m);
            }
            else {
                 console.log(3.2 * m);
            }
    }
}
/**/ 