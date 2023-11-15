// アロー関数で関数を定義
const calculateSquare = (number) => {
    return number * number;
};

// フォームの送信イベントをキャンセルする関数
const handleSubmit = (event) => {
    event.preventDefault();

    // 入力値を取得
    const inputNumber = parseFloat(document.getElementById("number").value);

    // 入力値が数値であるか確認
    if (!isNaN(inputNumber)) {
        // 結果を計算
        const result = calculateSquare(inputNumber);

        // 結果を表示
        document.getElementById("result").textContent = `入力値の二乗は${result}です。`;

        // 結果をコンソールに出力
        console.log(`入力値の二乗は ${result} です。`);
    } else {
        alert("数値を入力してください。");
    }
};

document.querySelector("form").addEventListener("submit", handleSubmit);
