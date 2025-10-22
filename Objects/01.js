// Using symbol and ? in object 

const UserId = Symbol("UserID");
const UserName = Symbol("Username");

let User = {
    FirstName:"Nitesh Kumar",
    LastName:"Singh",
    Age:20,
    UniqueDetails:{
        [UserId]: 544124, // while declaring symbol [] don't forget brackets 
        [UserName]: "@MrBrutal",
        personaldetails:{
            email:"mrbrutal@gmail.com",
            mobno: "+91 8053370***"
        }
    }   
}

// accesing symbol from object
console.log(User.UniqueDetails[UserId]); // while accessing symbol [] don't forget brackets 
console.log(User.UniqueDetails[UserName]);


// Access values using conditions(?) without writing if-else
console.log(User.UniqueDetails?.personaldetails?.email);
