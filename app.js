let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

btn1.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию о кабарге");
        item = "kabarga";
        tg.MainButton.show();
    }
});
btn2.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию об амурском тигре");
        item = "amurtigr";
        tg.MainButton.show();
    }
});
btn3.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию о подковоносе");
        item = "podkovonos";
        tg.MainButton.show();
    }
});
btn4.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию о снежном барсе");
        item = "snegniibars";
        tg.MainButton.show();
    }
});
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});