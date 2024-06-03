const getDigit = (num, index) => {
    let strNum = num.toString()
    let reversedIndex = strNum.length-1 -index
    return Number(strNum[reversedIndex])
}
console.log(getDigit(123456789,13))