// https://www.zxuqian.cn/5-javascript-tricky-problems
// 1. 可选分号
    function foo() {
    return 
    {
     value: 1
    };
    }
    console.log(typeof foo());
  /* 结果为```undefined```。
  return语句返回的对象放到了下一行，
  return语句换行后，JS会自动给其结尾加上分号，
  而return之后的代码不会执行。
  解决方法在每行结尾都写上分号，清楚知道代码在哪里结束 */

// 2. this指向
var a = 5;
var obj = {
    a: 3,
  foo: function() {
    console.log(this.a);
  }
}
 
var objFoo = obj.foo;
objFoo();
/*
结果为5
*/ 
- 数组长度
    ```js
    
    ```
- 提升(Hoisting)
    ```js
    
    ```
- 作用域与闭包
    ```js
    
    ```