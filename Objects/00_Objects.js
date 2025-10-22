const person = {
    FirstName:"Nitesh Kumar",
    LastName:"Singh",
    Age:20,
    HasGF: false,
    Hobbies:["Coding", "Gaming", "Sleeping"],
    Address:{
        Village:"Na Munna Nahi Bataunga",
        District:"Siwan",
        State:"Bihar",
        Country:"India"
    },
    MobNO: "8053370***",
    GMail:"mrbrutal@gmail.com",
    FullName: function(FirstName,LastName){ //writing function
        return FirstName + LastName
    },
    MobileNo(MobNo){ // defining method
        return "+91 " + MobNo
    }
}

console.log(person.Address?.Village)
// Accesing Values

console.log(person.MobileNo(person.MobNO))

console.log(person.Address.District) //print district of person

console.log(person.MobileNo(person.MobNO));
console.log(person.MobileNo(person.MobNO))