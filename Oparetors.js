// Operators

// Arithmetic Operators

let num1 = 10

let num2 = 5 * 5 * 5

let sum = num1 + num2

let sub = num1 - num2

let multiplication = num1 * num2

let division = num1 / num2

let expo = num1 ** num1

let modu = 100 / 10

let increment = ++num1

let decrement = --num1


console.log(sum)
console.log(sub)
console.log(multiplication)
console.log(division)
console.log(expo)
console.log(modu)
console.log(increment)
console.log(decrement)

// Assignment Oparetors
let number = 40

let x = 10

let result = number != x

console.log(result)
console.log(x += number) // x = x + number
console.log(number -= x) // number  = number - x

// logical Oparetors

let number = 22

let number2 = 23

console.log(number === number2) // ===

console.log(number !== number2)  // !==

console.log(number > number2)

console.log(number <= number2)

console.log(number >= number2)
// Conditional (Ternary) Operator

let age  = 17

let status = (age >= 18) ? "Adult" : "Teen"

console.log(status)


function isEven(num){
  return (num % 2=== 0 ) ? 'Even' : 'Odd'
}

console.log(isEven(20))


function isName(value){
  let x = (typeof value === "string") ? value : 'This is not a string'
  console.log(x)
}

isName("Rifat")

let list1 = [1,2,3]

let list2 = [4,5,6]

let condition = false

let combination = (condition) ? list1.concat(list2) : 'Condition is false'

console.log(combination)
