const messsage = "Hello, world! from TypeScript practice garage";
console.log("\n" + messsage + "\n");
// import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";
const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const inputFilepath = path.join(fileDir, "../uhyo.txt");
console.log("ReadFilePath = " + inputFilepath);
function count(sentence, searchWord) {
    let count = 0;
    let idx = 0;
    idx = sentence.indexOf(searchWord); //searchWordが、sentenceにおいて出現した際のindex(先頭からの文字インデックス)を、idxに格納
    while (idx != -1) {
        //idxが戻り値「-1」(=sentence.indexOf(searchWord)の実行結果としてsearchWordが出現なし)となるまで繰り返す
        count++;
        idx = sentence.indexOf(searchWord, idx + 1);
    }
    return count;
}
console.log("");
try {
    const sentence = await readFile(inputFilepath, { encoding: "utf8" });
    console.log("--- ファイル読み込み成功 ^^)v --- \n");
    // console.log(sentence);
    const searchWord = "uhyo";
    const result = count(sentence, searchWord);
    console.log("Search Word 「" + searchWord + " 」's Count = " + result);
}
catch (error) {
    console.log("\n !!!!! ファイル読み込み失敗 !!!!! \n \n", error);
}
finally {
    console.log("");
    console.log("----------- 演算終了 ------------");
    console.log("");
}
