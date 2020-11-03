// 1.创建Ajax实例(低版本IE兼容：new ActiveXObject();)
let xhr = new XMLHttpRequest;
// 2.打开URL（发送请求前的一些处理）
xhr.open('get', '/JS/ajax相关/data.json', true);
// 3.监听Ajax状态信息
xhr.onreadystatechange = function () {
    // xhr.readyState Ajax状态 0~4
    // xhr.status xhr.statusText 服务器返回的网络状态码 2/3/4/5

    // if (xhr.readyState === 4 && xhr.status === 200) {
    //     console.log(xhr.responseText);
    // }
    if (xhr.status === 200) {
        let n = xhr.readyState;
        if (n === 2) {
            console.log("头信息先回来", xhr.getAllResponseHeaders());
        }
        if (n === 4) {
            console.log("主体信息", xhr.responseText);
        }
    }
};
// 4.发送请求（请求信息的主体会基于send的时候发送给服务器）
xhr.send(null);

/*
GET: get/delete/head/options
POST: post/put

GET：从服务器获取，给的少 拿的多
    get
    delete 删除服务器上的文件或大量信息
    head 只需要获取响应头的信息，响应主体信息不接受（服务器也不需要返回）
    options 试探请求，用于CORS跨域资源共享的时候，每一个正常的请求发送之前，我们默认先发送一个options请求，请求校验正常连接
POST: 给服务器推送，给的多 拿的少
    POST
    put 和delete对应，传递文件和大量信息
GET传递一般基于URL地址问号传参，POST基于请求主体
1.GET传递给服务器的信息远远小于POST
    原因：URL在不同浏览器有长度限制 IE(2KB)，POST理论没有长度限制，但会手动设置限制保证数据传输的高效
2.安全问题：POST>GET
    GET基于URL传输，容易被URL劫持；POST相对安全，重要信息可以加密（MD5）
3.缓存问题：浏览器在处理GET请求时候，如果两次请求的地址+参数都一直，浏览器自己会设置数据缓存（此缓存是不想要的）
    想不要此缓存，需要保证每次请求的URL都不完全一致；（方案：问号传参末尾+Math.random()/时间戳)
    */ 

