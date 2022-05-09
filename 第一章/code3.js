const appDom = document.querySelector("#app");
for(let i = 0; i<10000; i++){
    const div = document.createElement("div");
    appDom.appendChild(div);
}

const appJS = [];
for(let i = 0; i<10000; i++){
    const div = {tag: "div"};
    appJS.push(div);
}