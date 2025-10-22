// Array Methods in JS
// Array.from - Creates Array from an iterable or String
console.log(Array.from("Apple"))

// Array.of - Creates Array From Arguments
let Arr= Array.of(1,2,3,4,5)  
console.log(Arr)

// Array.isArray - Check if value is an array
console.log(Array.isArray(Arr))

const Numbers = [1,2,3,8,5,6,47,52,5] 

// .indexof - returns the first index occurance of the element in the array
console.log(Numbers.indexOf(6));

// .lastindexof -returns the last index occurance of specified  element in the array
console.log(Numbers.lastIndexOf(5));

// .find - returns the value of the first array element that satisfies the provided test function

let EvenNumber = Numbers.find((element)=> (element) % 2 ==0)
console.log(EvenNumber)

// .findindex - returns the index of the first array element that satisfies the provided test function or else returns -1
let oddNumber = Numbers.findIndex((element)=> (element) % 2 ==1)
console.log(oddNumber);

// .includes - checks if an array contains a specified element or not.
console.log(Numbers.includes(52));