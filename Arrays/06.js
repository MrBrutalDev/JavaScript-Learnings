// Joining Conversion and filling

const cities = ['Delhi', "Chandigarh", "Noida", "Hyderabad"]
const tier3cities = ['Lucknow', 'Patna','Jaipur']

// .join - joines items of array with passed argument
console.log(cities.join(', '))

// .tostring - Convert array elements into string
const CitiesString = cities.toString()
console.log(CitiesString)

// .tolocalestring
console.log(tier3cities.toLocaleString())


// .concat - joines 2 array and return a new array without modifying original array
const AllCities = cities.concat(tier3cities)
console.log(AllCities)

// .copywithin - copies element into same array modifies original array
console.log(AllCities.copyWithin(target=2,start=1,end=4))

// .fill - fills array with same value takes "value", "start","end" as argument
const FilledCities = cities.fill("Patna",1,3)
console.log(FilledCities)