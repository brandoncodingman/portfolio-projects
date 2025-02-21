var data = [
    {
        AboutDevTypeText: "<span>ブランダン・シャピロ：ウェブプログラミングの伝説を目指す男。アメリカ出身のウェブプログラミングの未来の巨匠、<br><br>ブランダン・シャピロには使命がある。それは、世界で最も偉大なウェブプログラマーになること—少なくとも彼の子どもたちの寝かしつけストーリーによると。<br><br> 12歳の頃、ポケモンカードを集めるよりウェブサイトを作る方がクールだと気づき、キーボードとコーヒーを片手にコーディングを始めた。<br/><br/> 現在、サポート力抜群の妻と、時々いたずら好きな2人の子どもと一緒に日本に住んでいるブランダンは、プログラミングの伝説を目指して変わり者な冒険を続けている。<br><br> 日本では、寿司作りの名人を目指しつつ（結果はまだ）、地元の自動販売機をプロ並みに使いこなしている（緑茶のフレーバーの多さに驚き！）。<br/><br/> 昼間はインターネットを少しだけ整理するウェブサイトを作り、夜はパパ業をこなし、子どもたちのマインクラフト熱に耐えられるWi-Fiを確保している。彼のプログラミングスキルは鋭く、一度は妻のショッピング習慣を予測するウェブサイトを作った—そしてそれは90%正確だった。<br><br> 残りの10%はまだ取り組んでいるが、深層学習があればなんとかなると確信している。ブランダンの未来のビジョンはシンプルだ。それは、実際に猫の動画を撫でられる世界初の完全没入型VRウェブサイトを作ること。 <br><br>今はその日が来るまで、ウェブサイトを作り、家族とジョークを交わし、Google翻訳なしで日本語を書く方法を学んでいる（ほとんど）。彼の冒険を追いかけよう！プログラミングの論理と家族の混沌を融合させようとするその姿を。ネタバレ：コードのデバッグは、子どもの謎の汚れがソファに付いたときの方がずっと難しい。</span><br/><br/><br/><span>Want to work together?<br/> Y / N</span><br/>"
    }
];

var allElements = document.getElementsByClassName("typeing");
for (var j = 0; j < allElements.length; j++) {
    var currentElementId = allElements[j].id;
    var currentElementIdContent = data[0][currentElementId];
    var element = document.getElementById(currentElementId);
    var devTypeText = currentElementIdContent;

    // type code
    var i = 0, isTag, text;
    (function type() {
        text = devTypeText.slice(0, ++i);
        if (text === devTypeText) return;
        element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
        var char = text.slice(-1);
        if (char === "<") isTag = true;
        if (char === ">") isTag = false;
        if (isTag) return type();
        setTimeout(type, 60);
    })();
}

const op = document.getElementById('op');
const opHeader = document.getElementById('op-header');
const oph2 = document.getElementById('op-h2');

op.addEventListener('click', ()=>{
    op.style.display = 'none';
    opHeader.style.display = 'none';
    oph2.style.display = 'none';
});

opHeader.addEventListener('click', ()=>{
    op.style.display = 'none';
    opHeader.style.display = 'none';
    oph2.style.display = 'none';
});

oph2.addEventListener('click', ()=>{
    op.style.display = 'none';
    opHeader.style.display = 'none';
    oph2.style.display = 'none';

});