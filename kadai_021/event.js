// HTML要素を定数に代入
const textElement = document.getElementById("text");
const buttonElement = document.getElementById("btn");

// ボタンクリック時のイベントリスナーを設定
buttonElement.addEventListener("click", function () {
    // 2秒の遅延を設定してテキストを変更
    setTimeout(function () {
        textElement.textContent = "ボタンをクリックしました";
    }, 2000); // 2000ミリ秒（2秒）の遅延
});
