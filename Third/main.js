function passwordChangeType(obj) {
    var passwordInput = document.getElementsByName("password")[0];
    var nowType = passwordInput.getAttribute("type");
    if (nowType == "password") {
        passwordInput.setAttribute("type", "text");
        obj.getElementsByTagName("i")[0].textContent = "visibility_off";
    } else {
        passwordInput.setAttribute("type", "password");
        obj.getElementsByTagName("i")[0].textContent = "visibility";
    }
}