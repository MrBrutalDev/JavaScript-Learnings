// Arrow fx  are declared without using "function" keyword

const addnumbers = (num1, num2)=>{ // declaration
    return num1 + num2
}

// implicit return fx - arrow function without return keyword and no need of {}

const addintegers = (num1, num2)=> (num1 + num2)

console.log(addintegers(3,5))