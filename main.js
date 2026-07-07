function sendMsg() {
    const input = document.getElementById("msgInput");
    const box = document.getElementById("msgBox");
    let text = input.value.trim();
    if (!text) {
        alert("请输入心语再提交");
        return;
    }
    let div = document.createElement("div");
    div.className = "msg-item";
    div.innerText = text;
    box.appendChild(div);
    input.value = "";
}
