// 請完成calc function裡面的內容
// 題目說明: 請完成簡易的加減乘除運算，輸入一串數學式子，請輸出運算後的答案
// 輸入說明: 輸入一串數學式子的字串
// 輸出說明: 請直接console.log出答案
// 提示: String.includes, String.split


let calc = function (calcString: string) {
    let first_value = Number(calcString[0]);
    let second_value = Number(calcString[2]);

    if (calcString.includes('+')) {
        console.log(first_value + second_value);
    } else if (calcString.includes('-')) {
        console.log(first_value - second_value);
    } else if (calcString.includes('*')) {
        console.log(first_value * second_value);
    } else {
        console.log(first_value / second_value);
    }
}

calc('8*2')
calc('1+1')
calc('5/5')
calc('9-1')