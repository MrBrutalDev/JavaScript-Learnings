// global and local scope 
// scope is generally defined inside {}

function one(){
    const username = " Nitesh"
    function two(){
        const website = "YouTube" 
        console.log(username); // username will be still in acess bcoz it's in its parent function so it must work as global variable
    }
    // console.log(website); - we can't access variable website its scope 
    two()
}


one()