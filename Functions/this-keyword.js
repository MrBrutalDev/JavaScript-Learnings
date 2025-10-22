// this keyword is used to tell the context it works best in objects but doesn't work with functions

function print(){
    const username = "Nitesh"
    console.log(this.username) //error
}

// so this keyword cant be used inside fx and arrow fx 