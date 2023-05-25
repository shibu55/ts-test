import DiffMatchPatch from 'diff-match-patch'

const _DiffMatchPatch: any = DiffMatchPatch
const dmp = new _DiffMatchPatch()

// 例１
// const word: String = "イバウン（訪日外国人）による消費が回復してる。202３年3月のクレジットカド決済額を都道府県別に分析すると、全国の6割にあたる29府県で新型コロナウイルス禍前上回り、山形や高知など地方の回復が顕著だった。全国の合計額では8割超まで戻っている。";
// const correctWord: String = "インバウンド（訪日外国人）による消費が回復している。2023年3月のクレジットカード決済額を都道府県別に分析すると、全国の6割にあたる29府県で新型コロナウイルス禍前を上回り、山形や高知など地方の回復が顕著だった。全国の合計額では8割超まで戻っている。";

// 例２
// const word: String = "はじめなし、私の名前は他用性原理手技ぎです。";
// const correctWord: String = "はじめまして、私の名前は多様性原理主義です。";

// 例３
const word: String = "働き方が多用化している昨今。「副業に関心がある」と考るビネスパソンも多いのではないでし？";
const correctWord: String = "働き方が多様化している昨今。「副業に関心がある」と考えるビジネスパーソンも多いのではないでしょうか？";

const allDiffs = dmp.diff_main(word, correctWord)

const diffs = ''
console.log(allDiffs)

