// 現在の日付をミリ秒単位で取得
var currentTimeInMillis = Date.now();

// ミリ秒を日付のフォーマットに変換
var currentDate = new Date(currentTimeInMillis);
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // 月は0から11で表されるため、+1する
var day = currentDate.getDate();

// 月の名称を取得
var monthNames = ["", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var monthName = monthNames[month];

// 日付を表示形式に整形
var formattedDate = year + "年" + monthName + day + "日";

// コンソールに日付を表示
console.log(formattedDate);