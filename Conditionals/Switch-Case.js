// switch case in js

const accountBalance = undefined

switch (true){
    case (accountBalance <= 1000):
        console.log("Ae Garib")
        break
    case (accountBalance<=10000):
        console.log("Paisa ha but kam hai");
        break
    case (accountBalance<=100000):
        console.log("Rais Ho");
        break
    default:
        console.log("Paisa Bhar do bhai accountBalance mein")
        break
}

// must use break keyword after every case otherwise all other cases will get executed automatically except the default block bcoz it's the language flow

const Day = "Tuesday"

switch (Day){
    case "Monday": //to handle strings pass inside ""
        console.log("its Monday");
        break
    case "Tuesday":
        console.log("Aaj Manglwar hai");
        break
    default:
        console.log("Mujhe Nahi pata Hai");
        break    
}