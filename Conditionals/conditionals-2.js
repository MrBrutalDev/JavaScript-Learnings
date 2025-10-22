let numberofguest = 4

let pizzasize;
if(numberofguest<=2){
    pizzasize ="Small"
}
else if(numberofguest<=4){
    pizzasize="Medium"
}
else if(numberofguest>=5){
    pizzasize="Large"
}
console.log(`you have only ${numberofguest}, so order ${pizzasize} size pizza`)