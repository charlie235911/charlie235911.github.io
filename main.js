const timer = setInterval(type, 100);
const text = "親愛的用戶：\n" +
    "\n" +
    "感謝您使用我們的網站。由於使用人數眾多，我們的網站正在處理一些技術問題，導致您需要等待才能訪問我們的網站。\n" +
    "\n" + "如果您需要任何幫助或有任何疑問，請隨時與我們聯繫。我們會一直努力提供更好的服務，為您帶來更好的使用體驗。";
let index = 0;

function type() {
    document.getElementById("text").innerHTML += text.charAt(index);
    index++;
    if (index >= text.length) {
        clearInterval(timer);
    }
}

const reloadButton = document.getElementById('reload-btn');
reloadButton.addEventListener('click', () => {
    location.reload();
});

const backButton = document.getElementById("back-btn");
backButton.addEventListener("click", function() {
    history.back();
});

const progressBar = document.getElementById("progress-bar");
const progressValue = document.getElementById("progressValue");
const link= document.getElementById("link-start");
const load = document.getElementById("loading");
let value = 0;
const timerId = setInterval(() => {
    const randomIncrement = Math.floor(Math.random() * 15);
    value += randomIncrement;
    if (value > 100) value = 100;
    progressBar.value = value;
    progressValue.innerText = value + "%";
    if (value === 100) {
        setTimeout(function() {
            progressBar.style.display = "none";
            progressValue.style.display = "none";
            load.style.display = "none";
            link.style.display = "block";
            setTimeout(function() {
                window.location.href = 'https://ani.gamer.com.tw/';
            }, 4900);
        }, 1000);
    }
}, 1500);