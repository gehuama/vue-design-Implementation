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
const div = document.querySelector("#app-JS") // 获取div
div.innerText = "hello world-JS" // 设置文本内容
div.addEventListener("click", ()=>{ // 绑定事件
    alert("ok")
})