let arr = [10, 20, 30];

// push 
/**
 * @param :参数个数，类型不固定，向数组末尾依次追加内容
 * @return :[NUMBER] 新增后数组的长度
 * 原始数组改变
*/ 

arr.push(40);
console.log(arr);

//pop 删除最后一项
/**
 * @param :无
 * @return 被删除的一项
 * 原始数组改变
 */
arr.pop();
console.log(arr);

// unshift 向数组开始位置新增内容
/**
 * @param：个数，类型不定，依次新增arr
 * @return: [NUMBER] 新增后的长度
 * 原始数组改变
 */

let result = arr.unshift(0, 'Margin');
console.log(result, arr);

//shift 删除第一项
/**
 * @param :无
 * @return 被删除的一项
 * 原始数组改变
 */
result = arr.shift();
console.log(result, arr);

// splice 增删改
/**
 * arr.splice(n,m):从索引n开始，删除m个元素
 */