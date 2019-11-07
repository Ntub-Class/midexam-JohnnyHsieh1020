// 題目說明: 請使用套件readline-sync跟node-qrcode，輸入文字來產生QRCODE
// 輸入說明: 請打上任意文字，並產生QRCODE
// 輸出說明: 請輸出檔名為QRCODE.png圖片
import * as realineSync from 'readline-sync';
import * as QRCode from 'qrcode';//create QRcode

let show = realineSync.question('What do you want to show? ');

QRCode.toFile('./QRCODE.png', show)
console.log('Create QRcode successfully!')