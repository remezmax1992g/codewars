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
    return !(arrayNumber[0] === 1||2||3)
}

console.log(validateCode(1234))
//6
function makeNegative(num) {
    if (num <= 0) {
        return num
    } else {
        return (-1) * num
    }
}

console.log(makeNegative(2))
//7
function isDivisible(n, x, y) {
    return !(n % x === 0 && n % y === 0)
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