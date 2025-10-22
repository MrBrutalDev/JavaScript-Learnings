// copy objects by methods and manually

const Object1 = {
    FirstName:"Nitesh Kumar",
    LastName:"Singh",
    Age:20}

const UniqueDetails = {
        UserId: 544124, // while declaring symbol [] don't forget brackets 
        UserName: "@MrBrutal",
        personaldetails:{
            email:"mrbrutal@gmail.com",
            mobno: "+91 8053370***"
        }}

console.log(Object.assign(Object1, UniqueDetails))
console.log(Object1);
