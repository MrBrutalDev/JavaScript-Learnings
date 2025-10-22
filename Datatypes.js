// Datatypes
// Primitive Datatypes - Data Types that are most basic data types and are stored in stack and they are immutable

const String = "Hello" // set of characters written under quotes single or double
const Number = 10 // represents both integer and floating points
const BigInt = 10005444511n // used for scientific numbers
const Boolean = true // logical values "true" or "false" or we can say "0" or "1"
const Undefined = undefined // a variable which is declared but not assigned any value
const Null = null // intentionally kept nothing into it (nothing doesn't mean it is zero nothing means nothing)
const Userid = Symbol("Description for symbol goes here") // symbols are unique even if there description in same and are not enumerable (means they dont show up in loops)


// Non Primitive Datatypes - these datatypes are objects and are stored by refrence in heap memory  any variable containing these have only refrence to the object 

// arrays - arrays are access by indexing an index is automatically assigned to them starting from zero
const Fruits = ["apple", "banana", 'watermelon',"Orange"] 

// objects - objects are stored in key value pairs and values are access by keys
/* Every key value is separated by commas and values are accessed by two methods
objectname.keyname or objectname[key name] to access symbols only second method works
*/
// key name can be only string or symbol

const Candidate = {
    firstname: "Nitesh Kumar",
    lastname: "Singh",
    Age: 20,
    Address: {
        Village: "Nahi Bataunga",
        District: "Siwan",
        State: "Bihar",
        ZipCode: 8415
    },
    FullName: function(firstname, lastname){
        return firstname + lastname
    },
    [Userid]: 5454121
}

// functions are also non primitive data types

function print(){
    console.log("this is a print function")
}

print()

// Set - set is built in javascript object but it stores only unique values and insertion order is not maintained (no duplicates are allowed)

const MySet = new Set() //Accepts iterable as argument (array or objects both)
MySet.add({name: "Nitesh"})
MySet.add("Nitesh")
console.log(MySet)

// Map - map is a collection of key value pairs but in map keys can be of any datatype (unlike objects which use only strings/symbols as keys)
/* map maintains insertion order
keys and name are separated by commas and different key value pair is also separated by comma*/
const MyMap = new Map([
    ["name", "Nitesh"],
    ["age", 20]
])
MyMap.set(5654218, "ID")
console.log(MyMap)