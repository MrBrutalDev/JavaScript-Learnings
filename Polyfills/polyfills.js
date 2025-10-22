const Array3 = [4,5,6,7,8,9];

if(!Array.prototype.mymap){
    Array.prototype.mymap = function(userFn){
        let ResultArray = [];

        for(let i=0; i<this.length; i++){
            ResultArray.push(userFn(this[i]))
        }
        return ResultArray;
    }
}

console.log(Array3.mymap((i)=> i+1));
if(!Array.prototype.mypush){
    Array.prototype.mypush = function(value){
        LastIndex = this.length
        this[LastIndex]= value
        return this.length
    }
}
Array3.mypush(51)
Array3.mypush(45)
console.log(Array3)

if(!Array.prototype.mypop){
    Array.prototype.mypop = function(){
        LastElement = this[this.length-1]
        this.length = this.length - 1
        return LastElement
    }
}
Array3.mypop()
let poped = Array3.mypop()
console.log(poped)
console.log(Array3)