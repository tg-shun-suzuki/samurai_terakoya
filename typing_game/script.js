// 変数の初期化
let untyped = '';
let score = 0;

// 必要なHTML要素の取得
const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed'); // 修正が必要な行
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');
const restart = document.getElementById('restart');
const count = document.getElementById('count');
const body = document.body; // body要素を取得

// 複数のテキストを格納する配列
const textLists = [
    'Hello World', 'This is my App', 'How are you?',
    'Today is sunny', 'I love JavaScript!', 'Good morning',
    'I am Japanese', 'Let it be', 'Samurai',
    'Typing Game', 'Information Technology',
    'I want to be a programmer', 'What day is today?',
    'I want to build a web app', 'Nice to meet you',
    'Chrome Firefox Edge Safari', 'machine learning',
    'Brendan Eich', 'John Resig', 'React Vue Angular',
    'Netscape Communications', 'undefined null NaN',
    'Thank you very much', 'Google Apple Facebook Amazon',
    'ECMAScript', 'console.log', 'for while if switch',
    'var let const', 'Windows Mac Linux iOS Android',
    'programming'
];

// ゲームが開始されたかどうかのフラグ
let gameStarted = false;

// ランダムなテキストを表示
const createText = () => {
    // テキストがない場合、新しいテキストを取得
    if (untyped === '') {
        // 配列のインデックス数からランダムな数値を生成する
        let random = Math.floor(Math.random() * textLists.length);

        // 配列からランダムにテキストを取得
        untyped = textLists[random];

        // テキストを表示
        untypedfield.innerHTML = untyped.split('').map(char => `<span class="type">${char}</span>`).join('');
    }
};

// キー入力の判定
const keyPress = e => {
    // ゲームが開始されていない場合、スタートボタンがクリックされるまで何もしない
    if (!gameStarted) {
        return;
    }

    // 入力されたキー
    const inputKey = e.key;

    // 正解かどうかの判定
    const correct = untyped.charAt(0) === inputKey;

    // キーに対応する<span>要素を取得
    const spanElement = untypedfield.querySelector('.type');

    if (spanElement) {
        // 正解の場合
        if (correct) {
            spanElement.classList.remove('type');
            spanElement.classList.add('success');
            typedfield.textContent += inputKey;
            untyped = untyped.slice(1);

            // 成功した入力のフォントの色を緑色に変更
            spanElement.style.color = 'green';

            // typedfieldの内容を非表示にする
            typedfield.style.display = 'none';
        } else {
            // 誤タイプの場合
            wrap.classList.add('mistyped');
            
            // HTML上の背景を一時的に赤くする
            body.style.backgroundColor = '#fd3c2f20';
            
            // 100ms後に背景色を元に戻す
            setTimeout(() => {
                wrap.classList.remove('mistyped');
                body.style.backgroundColor = ''; // 赤い背景をクリア
            }, 100);
        }
    }

    // テキストがなくなったら新しいテキストを表示
    if (untyped === '') {
        createText();
        
        // typedfieldの内容を再表示する
        typedfield.style.display = 'block';
        typedfield.textContent = '';
    }
};

// タイピングスキルのランクを判定
const rankCheck = score => {
    // テキストを格納する変数を作る
    let text = '';

    // スコアに応じて異なるメッセージを変数textに格納する
    if (score < 100) {
        text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
    } else if (score < 200) {
        text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
    } else if (score < 300) {
        text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;
    } else if (score >= 300) {
        text = `あなたのランクはSです。\nおめでとうございます!`;
    }

    // 生成したメッセージと一緒に文字列を返す
    return `${score}文字打てました!\n${text}\n【OK】リトライ / 【キャンセル】終了`;
};

// ゲームを終了
const gameOver = () => {
    const result = confirm(rankCheck(score));

    // OKボタンをクリックされたらリロードする
    if (result) {
        window.location.reload();
    }
};

// カウントダウンタイマー
const timer = () => {
    // タイマー部分のHTML要素（p要素）を取得する
    let time = parseInt(count.textContent);

    const id = setInterval(() => {
        // カウントダウンする
        time--;
        count.textContent = time;

        // カウントが0になったらタイマーを停止する
        if (time <= 0) {
            clearInterval(id);
            gameOver();
        }
    }, 1000);
};

// ゲームスタート時の処理
start.addEventListener('click', () => {
    if (!gameStarted) {
        // ゲームがまだ開始されていない場合のみ以下の処理を実行
        gameStarted = true;

        // カウントダウンタイマーを開始する
        timer();

        // ランダムなテキストを表示する
        createText();

        // 「スタート」ボタンを非表示にし、「リトライ」ボタンを表示する
        start.style.display = 'none';
        restart.style.display = 'inline-block';

        // キーボードのイベント処理
        document.addEventListener('keypress', keyPress);
    }
});

// リトライボタンがクリックされたときの処理
restart.addEventListener('click', () => {
    // カウントダウンタイマーを再度開始する
    timer();

    // ランダムなテキストを表示する
    createText();

    // スコアをリセット
    score = 0;

    // ゲームが開始されていないフラグをリセット
    gameStarted = false;

    // 「リトライ」ボタンを非表示にし、「スタート」ボタンを表示する
    restart.style.display = 'none';
    start.style.display = 'inline-block';

    // キーボードのイベント処理
    document.addEventListener('keypress', keyPress);
});

// 初期状態で「リトライ」ボタンを非表示にする
restart.style.display = 'none';

// 初期表示の設定
createText();
