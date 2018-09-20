var body = document.querySelector("body");
var colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function shuzi() {
    var ranNum = "";
    for (var i = 0; i < 6; i++) {
        ranNum += colorArr[Math.floor(Math.random() * colorArr.length)];
    }
    body.style.background = "#" + ranNum;
    console.log(ranNum);
}

window.onclick = function () {
    shuzi();
}