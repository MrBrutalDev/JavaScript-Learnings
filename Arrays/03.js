// Adding Or Removing Elements in Arrays With Array Methods

Fruits =["Apple", "Banana","Guava","Mango","Orange"]

// .push - To add elements at the end of the array
Fruits.push("Watermelon")
console.log(Fruits)

// .pop - Removes the last element from the array and returns the removed element
Fruits.pop()
console.log(Fruits)

// .unshift - Adds element at the first of array
Fruits.unshift("Grapes")
console.log(Fruits)

// .shift - Removes the first element from the array and returns the removed item
Fruits.shift()
console.log(Fruits)

// .slice- Cuts a specific part from the array and return a shallow copy of that part 
console.log(Fruits.slice(0,2)) //takes start and end index

// .splice - Add/Remove at any index
/* 
StartIndex - from where to start in array
DeleteCount - Number of elements to delet from array
Elements - elements to add in array at StartIndex 
(pass both DeleteCount and Elements if want to replace elements from Array) 
(pass StartIndex and DeleteCount=0 and Elements if only want to add elements in array)*/

console.log("Elements Before Splice Method used", Fruits)
Fruits.splice(0,2,"January", "February") //Replacing first 2 elements
console.log(Fruits)

Fruits.splice(0,0,"Apple", "Banana",) //adding elements at first
console.log(Fruits)


console.log(Fruits.splice(2,2)) //removing 2 elements after index 2
console.log(Fruits)