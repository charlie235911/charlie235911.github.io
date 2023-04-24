function passwordChangeType(obj) {
    const passwordInput = document.getElementsByName("password")[0];
    const nowType = passwordInput.getAttribute("type");
    if (nowType === "password") {
        passwordInput.setAttribute("type", "text");
        obj.getElementsByTagName("i")[0].textContent = "visibility_off";
    } else {
        passwordInput.setAttribute("type", "password");
        obj.getElementsByTagName("i")[0].textContent = "visibility";
    }
}

function show(){
    alert("此登入方式暫且維修中，請嘗試其他登入方式。");
}