// Iteration and Transformation

// .forEach - Iterates over every element of the array
const Fruits = ["Apple", "Mango", "Banana", "Orange"]
Fruits.forEach((x)=> console.log(x))

// .map - takes userFn and applies it onto array and return a new array of results
function Square(x){
    return x**2
}
const Number = [1,4,5,7,8,12,14]
console.log(Number.map(Square))

// .filter - it checks a condition (whether using function) if its true then add it into an array and return it
function GreaterThan(Value){
    return Value>=10
}
console.log(Number.filter(GreaterThan))

// Using Arrow function
console.log(Number.filter(x=> x>=10)) 

// using lambda function
const GreaterNumbers= Number.filter(function(value){
    return value>=10
})
console.log(GreaterNumbers)

// .reduce - return Sum of all the numbers of an array
let Numbers = [1000,10,20,30,50,40,80]

const NumbersSum = Numbers.reduce(GetSum)
console.log(NumbersSum);
console.log(Numbers.reduce(GetSubtraction))

function GetSum(previous,currentvalue){
    return previous + currentvalue}

function GetSubtraction(previous,currentvalue){
    return previous - currentvalue
}

// .flat - it is used to convert nested array into simple array

NestedArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(NestedArray.flat());