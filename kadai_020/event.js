// HTML要素を定数に代入
const textElement = document.getElementById("text");
const buttonElement = document.getElementById("btn");

// ボタンクリック時のイベントリスナーを設定
buttonElement.addEventListener("click", function () {
    // text要素のテキストを変更
    textElement.textContent = "ボタンをクリックしました";
});