const textElement = document.getElementById('text');
const loadingElement = document.getElementById('text_loading');
const progressBar = document.getElementById("progress-bar");
const progressValue = document.getElementById("progressValue");
const link= document.getElementById("link-start");
const load = document.getElementById("loading");
const reloadButton = document.getElementById('reload-btn');
const backButton = document.getElementById('back-btn');
const reportButton = document.getElementById('report-btn');
let value = 0;
const timerId = setInterval(() => {
    const randomIncrement = Math.floor(Math.random() * 15);
    value += randomIncrement;
    if (value > 100) value = 100;
    progressBar.value = value;
    progressValue.innerText = value + "%";
    if (value === 100) {
        setTimeout(function() {
            textElement.style.display = "none";
            loadingElement.style.display = "none";
            progressBar.style.display = "none";
            progressValue.style.display = "none";
            load.style.display = "none";
            link.style.display = "block";
            reloadButton.style.display = "none";
            backButton.style.display = "none";
            reportButton.style.display = "none";
            setTimeout(function() {
                window.location.href = 'https://charlie235911.github.io/Third/';
            }, 5100);
        }, 1000);
    }
}, 2000);

reloadButton.addEventListener('click', function () {
    location.reload();
});

backButton.addEventListener('click', function () {
    history.back();
});

reportButton.addEventListener('click', function () {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSf2pEm3Gxh_aXhDIVx-zMmBUM0DVrO7UZ3ZPXqdwvxlHlD9bA/viewform');
});
