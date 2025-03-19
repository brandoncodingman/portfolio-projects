const terminalOutput = document.getElementById("terminal-output");
const textLines = [
    "イベントホライズンへようこそ。",
    "$",
    "合計 8",
    "-rw-r--r-- 1 user user 123 10月 11日 10:00 file.txt",
    "drwxr-xr-x 2 user user 4096 10月 11日 10:10 folder",
    "-rw-r--r-- 1 user user 567 10月 11日 10:05 document.doc",
    "エラー: 不安定な重力波を検出しました。",
    "警告: サブスペースでデータ破損。",
    "不正アクセス: 警告: 不明な存在を検出。",
    "識別不能な信号源: 歪んだ座標。",
    "システム障害: メモリ破損がセクター1045で発生。",
    "リクエスト処理不可: デフォルト状態に戻します。",
    "通信失敗... 接続を再確立中。",
    "接続失敗: ステータス確認不可。",
    "イベントホライズン異常検出。",
    "警告: イベントホライズン接近中。破壊が迫っています。",
    "ファイルパス: //distorted/system_shutdown/primary_route",
    "エラー 404: 虚無異常 - 応答なし。",
    "エンティティ検出: 起源不明。プロトコル失敗。",
    "システム: フェイルセーフモードに戻します。",
    "通信終了。",
    "プログラム終了。",
];


let lineIndex = 0;
let charIndex = 0;
let typingIntervalId;
const typingSpeed = 50; 

function writeToTerminal(text) {
    terminalOutput.innerHTML += text;
}

function scrollText() {
    if (charIndex === 0) {
        writeToTerminal("<br>"); // Start a new line
    }

    if (charIndex < textLines[lineIndex].length) {
        writeToTerminal(textLines[lineIndex].charAt(charIndex));
        charIndex++;
    } else {
        charIndex = 0;
        lineIndex++;
        if (lineIndex >= textLines.length) {
            lineIndex = 0;
        }
    }
}

function startTypingAnimation() {
    typingIntervalId = setInterval(scrollText, typingSpeed);
}

// Start the typing animation.
startTypingAnimation();
