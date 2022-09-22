//1
function powersOfTwo(n) {
    let arrayTwo = []
    for (let i = 0; i <= n; i++) {
        arrayTwo.push(Math.pow(2, i))
    }
    console.log(arrayTwo)
    return arrayTwo
}

powersOfTwo(3);
//2
function capitalizeWord(word) {
    let newWord = word[0].toUpperCase() + word.slice(1);
    console.log(newWord)
    return newWord
}

capitalizeWord("max");
//3
function maskify(cc) {
    let newCC = [];
    let newCreditCard
    console.log(cc.length)
    if (cc.length <= 4) {
        newCreditCard = cc;
    } else {
        for (let i = 0; i <= cc.length - 5; i++) {
            newCC[i] = "#";
        }
        newCreditCard = newCC.join("") + cc[cc.length - 4] + cc[cc.length - 3] + cc[cc.length - 2] + cc[cc.length - 1]

    }
    console.log(newCreditCard)
    return newCreditCard
}
//4
maskify("11111")

function sum(numbers) {
    return numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)}

console.log(sum([1, 4, 5, 8]));
//5
function validateCode(code) {
    let arrayNumber = Array.from(code.toString(), Number)
    return arrayNumber[0] === 1||2||3
}

console.log(validateCode(1234))
//6
function makeNegative(num) {
    return num <=0 ? num : (-1) * num
}

console.log(makeNegative(2))
//7
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
}
console.log(isDivisible(34, 7, 13))
//8
function even_or_odd(number) {
    if (number % 2 === 0){
        return "Even"}
    else{
        return "Odd"
    }
}
console.log(even_or_odd(5))
//9
function countBy(x, n) {
    let z = [];
    for (let i = 0; i < n*x; i+=x) {
        z.push(x+i)
    }
    return z;
}
console.log(countBy(1,10))
//10
function cockroachSpeed(s) {
    return Math.floor(s*100000/3600)
}
console.log(cockroachSpeed(1.23))
//11
function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)),2)
}
console.log(nearestSq(5))
//12
let orderedCount = function (text) {
    let letters = text.split("")
    let uniqLetters = letters.filter((letter, index) => letters.indexOf(letter) === index)
    return uniqLetters.map((letter) => [letter, text.split(letter).length-1])
}
console.log(orderedCount("cdcdfcfvfv"))
//13
function bonusTime(salary, bonus) {
    if(bonus){
        let newSalary = salary*10
        return `£${newSalary}`
    }
    else {
        return `£${salary}`
    }
}
console.log(bonusTime(1000, true))
//14
function sumMix(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        if(typeof x[i] === "string"){
            sum+=Number(x[i])}
        else{
            sum+=x[i]
        }
    }
    return sum
}
console.log(sumMix([1, 5, "4"]))
//15
function collatz(n) {
    let arr = []
    arr.push(n)
    while(n > 1){
        if(n % 2 === 0){
            n/=2
            arr.push(n)
        }
        else{
            n = n*3+1
            arr.push(n)
        }
    }
    return arr
}
console.log(collatz(20))
//16
export function digitize(n) {
    return n.toString().split("").reverse().map(int => parseInt(int, 10))
}
console.log(digitize(20434545))
//17
String.prototype.isUpperCase = function() {
    return this.valueOf().toUpperCase() === this.valueOf()
}
console.log("DFFFFDF".isUpperCase())
//18
function divisibleBy(numbers, divisor){
    return numbers.filter(num => num % divisor === 0)
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))
//19
function billboard(name, price = 30){
    let sum = 0
    for (let i = 0; i < name.split("").length; i++) {
        sum+=price
    }
    return sum
}
console.log(billboard("Jeong-Ho Aristotelis"))
//20
export function reverseWords(str){
    return str.split(" ").reverse().join(" ");
}
console.log(reverseWords("The greatest victory is that which requires no battle"))
//21
function SubtractSum(n){
    let fruitArray = ["kiwi",
        "pear",
        "kiwi",
        "banana",
        "melon",
        "banana",
        "melon",
        "pineapple",
        "apple",
        "pineapple",
        "cucumber",
        "pineapple",
        "cucumber",
        "orange",
        "grape",
        "orange",
        "grape",
        "apple",
        "grape",
        "cherry",
        "pear",
        "cherry",
        "pear",
        "kiwi",
        "banana",
        "kiwi",
        "apple",
        "melon",
        "banana",
        "melon",
        "pineapple",
        "melon",
        "pineapple",
        "cucumber",
        "orange",
        "apple",
        "orange",
        "grape",
        "orange",
        "grape",
        "cherry",
        "pear",
        "cherry",
        "pear",
        "apple",
        "pear",
        "kiwi",
        "banana",
        "kiwi",
        "banana",
        "melon",
        "pineapple",
        "melon",
        "apple",
        "cucumber",
        "pineapple",
        "cucumber",
        "orange",
        "cucumber",
        "orange",
        "grape",
        "cherry",
        "apple",
        "cherry",
        "pear",
        "cherry",
        "pear",
        "kiwi",
        "pear",
        "kiwi",
        "banana",
        "apple",
        "banana",
        "melon",
        "pineapple",
        "melon",
        "pineapple",
        "cucumber",
        "pineapple",
        "cucumber",
        "apple",
        "grape",
        "orange",
        "grape",
        "cherry",
        "grape",
        "cherry",
        "pear",
        "cherry",
        "apple",
        "kiwi",
        "banana",
        "kiwi",
        "banana",
        "melon",
        "banana",
        "melon",
        "pineapple",
        "apple",
        "pineapple"]
    let temp = n - n.toString().split('').map(num => parseInt(num)).reduce((acc, arg) => acc + arg)
    console.log(temp)
    if(temp >= 1 && temp<= 100)
        return fruitArray[temp-1];
    else {
        return SubtractSum(temp)
    }
}
console.log(SubtractSum(10))
//22
function oddCount(n) {
    return Math.floor(n/2)
}
console.log(oddCount(15))
//23
function quadratic(x1, x2){
 return [1, -x1-x2, x1*x2]
}
console.log(quadratic(0, 1))
//24
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}
console.log(goals(1, 2, 5))
//25
const flip=(d, a)=>{
    if (d === 'R')
        return a.sort((a,b) => a >= b ? 1 : -1)
    if (d === 'L')
        return a.sort((a,b) => a >= b ? -1 : 1)
}
console.log(flip('R', [3, 2, 1, 2]))
//26
const arr = N => {
    let arr = []
    for (let i = 0; i < N; i++) {
        arr.push(i)
    }
    return arr
}
console.log(arr(4))
//27
function makeFlat(arr){
    return arr.reduce((acc, el) => acc.concat(Array.isArray(el) ? makeFlat(el):el),[])
}
console.log(makeFlat([[1,2],[3,[4,[5]]]]))
//28
function rowSumOddNumbers(n) {
    return Math.pow(n, 3)
}
//29
console.log(rowSumOddNumbers(3))
function noSpace(x){
    return x.split(" ").join("")
}
console.log(noSpace("cfvfvfvfvfvfvf  vfv fvcfvfv fvff9v vf"))
//30
function feast(beast, dish) {
    if(beast && dish){
        const b1 = beast[0];
        const b2 = beast[beast.length - 1];
        const d1 = dish[0];
        const d2 = dish[dish.length - 1];
        if(b1 === d1 && b2 === d2) return true
        else return false
    }
    else return false;
}
console.log(feast("chickadee", "chocolate cake"))
//31
var summation = function (num) {
return (num * (num + 1))/2
 }
console.log(summation(10))