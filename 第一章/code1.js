/**
 * 1. 获取id为app的div标签
 * 2. 它的文本内容为hello world
 * 3. 为其绑定点击事件
 * 4. 当点击时弹出提示：OK
*/
// JQuery 代码示例
$("#app-JQuery") // 获取div
    .text("hello world-JQuery") // 设置文本内容
    .on("click", ()=>{ // 绑定事件
        alert("ok") 
    })

// 原生js 代码示例
const divJS = document.querySelector("#app-JS") // 获取div
divJS.innerText = "hello world-JS" // 设置文本内容
divJS.addEventListener("click", ()=>{ // 绑定事件
    alert("ok")
})

/** 定义一段HTML字符串 */
const html = `<div><span>渲染出来html</span></div>`;
const divHtml = document.querySelector("#app-html") // 获取div
// 将字符串负值给DOM元素的innerHTML属性
divHtml.innerHTML = html
/**
 * code 25行 为了渲染出页面
 * 把字符串解析成DOM树，这里是一个DOM层面的计算，涉及DOM的运算要比JavaScript层面的计算性能差
 * 
 **/ 

 const app = document.querySelector("#app");
 for(let i = 0; i<10000; i++){
     cosnt div = document.createElement("div");
     app.appendChild(div);
 }