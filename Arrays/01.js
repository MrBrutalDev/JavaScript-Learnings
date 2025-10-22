// Creation and validation of arrays in JavaScript

const Arr = new Array(1,2,3,4,5)
const Cities = ["Delhi", "Gurugram", "Sonipat","Noida","Lucknow"]

// Iterators or Loop in Arrays
for(let i =0; i<Arr.length; i++){
    console.log(Arr[i]*2)
}

const Fruits = ["apple", "banana","guava", "watermelon"]

// Using Array of - returns elements of Array
for(let fruit of Fruits){
    console.log(fruit)
}
// Using in Array - returns index of array elements
for(let i in Fruits){ 
    console.log(Fruits[i])
}

