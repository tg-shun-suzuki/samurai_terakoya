document.addEventListener("DOMContentLoaded", function() {
    // DOMが読み込まれた後に処理を実行
    var holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

    // for文の処理を関数にまとめる
    function runForLoop() {
        for (var i = 0; i < holidays.length; i++) {
            console.log(holidays[i]);
        }
    }

    // while文の処理を関数にまとめる
    function runWhileLoop() {
        var i = 0;
        while (i < holidays.length) {
            console.log(holidays[i]);
            i++;
        }
    }

    // ボタンがクリックされた時の処理を設定
    document.getElementById("forButton").addEventListener("click", runForLoop);
    document.getElementById("whileButton").addEventListener("click", runWhileLoop);
});
