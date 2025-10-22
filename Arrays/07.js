// iterator methods

// .keys - returns key of every item (means index) bcoz every array is handled as an object 
const Games = ["GTA", "CyberPunk","BGMI","Valorant","Tekken"]
const GamesIterator = Games.keys()
for(let key of GamesIterator){
    console.log(Games[key])
}

// .values - return values of every element from the array
const GamesValues = Games.values()
for(let value of GamesValues){
    console.log(value)
}

// .enteris - returns key,value pair of array
GamesEntries = Games.entries()
for(let [key,value] of GamesEntries){
    console.log(`${value} at index ${key}`)
}