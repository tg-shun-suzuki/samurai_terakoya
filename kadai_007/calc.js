// ページの読み込みが完了したときに実行される関数
document.addEventListener("DOMContentLoaded", function () {
    // フォームの要素を取得
    const numInput = document.getElementById('numInput');
    const resultButton = document.getElementById('resultButton');
    const resultMessage = document.getElementById('resultMessage');

    if (numInput && resultButton && resultMessage) {
        // 結果ボタンがクリックされたときの処理
        resultButton.addEventListener('click', function() {
            // 入力された数値を取得
            const num = parseInt(numInput.value);

            // 条件に応じて結果を計算
            let message = "";
            if (num % 3 === 0 && num % 5 === 0) {
                message = "3と5の倍数です";
            } else if (num % 3 === 0) {
                message = "3の倍数です";
            } else if (num % 5 === 0) {
                message = "5の倍数です";
            } else {
                message = num.toString();
            }

            // 結果を表示
            resultMessage.textContent = message;

            // 結果をconsole.logに出力
            console.log(message);
        });
    } else {
        console.error("要素が見つかりません。");
    }
});
