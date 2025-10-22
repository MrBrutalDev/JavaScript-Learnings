const numbers = [1,2,3,4,5,6,7,8,9,10]

console.log(numbers.filter(number => number % 2 === 0));

if(!Array.prototype.myfilter){
    Array.prototype.myfilter = function(userFn, index){
        const ResultArray =[]
        for(let i = 0; i<this.length; i++){
            if(userFn(this[i])){
                ResultArray.push(this[i])
            }
        }
        return ResultArray
    }
}
console.log(numbers)
console.log(numbers.myfilter((e) => e%2 ==0))