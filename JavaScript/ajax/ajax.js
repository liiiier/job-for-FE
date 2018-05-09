var xhr = null;
xhr = new XMLHttpRequest() // 创建请求
xhr.open('get', url, true); // 链接服务器
xhr.send(null); // 发送请求
// 等待请求结果
xhr.onreadystatechange = function() {
  if(xhr.readState === 4) {
    if(xhr.status === 200) {
      console.log(xhr.responseText)
    } else{
      // 会根据这个状态码做出对应的操作
    }
  }
}
// 200 OK 201 Created 202 Accepted
// 3XX redirected
// 301 永久重定向 303 see other
// 304 Not Modified 自从上次请求之后没有修改过的
// 4xx client Error 
// 400 bad Request 
// 401 not Unauthorized 
// 403 forbidden
// 404 not found