// Searching and Sorting
Numbers = [12,5,23,4,5,57,7,5]

// .includes - check if contains passed argument returns boolean
console.log(Numbers.includes(7))

// .indexof - returns only first index of element from array then breaks
console.log(Numbers.indexOf(23));

// .lastindexof - returns last index of element from array, then breaks
console.log(Numbers.lastIndexOf(5));

// .find - checks conditon and return index of first element that matching condition
console.log(Numbers.find((x)=> x%5===0))

// .findIndex - checks condition and return first matching element
console.log(Numbers.findIndex((x)=> x%4===0))

// .some - returns true if any of the element matches condition
console.log(Numbers.some((x)=> x%2 ===0))

// .every - returns true if every element of array matches condition
console.log(Numbers.every((x)=> x%2 ===0))


// .sort - sort elements of array takes compare function as argument otherwise converts into string and then sorts (it makes changes in to original array)

const cities = ['Delhi', 'Lucknow', "Chandigarh", "Noida", "Hyderabad"]
console.log(cities.sort())

// sorting in ascending order
const AscendingSort = Numbers.sort(function(previous, currentvalue){
    return previous-currentvalue
})
console.log(AscendingSort)

// sorting in descending order
const DescendingSort = Numbers.sort(function(previous, currentvalue){
    return currentvalue - previous
})
console.log(DescendingSort)

// .reverse - reverse the original array
console.log(Numbers.reverse())