//singleton
//object.create

//object literals

const mySym= Symbol("key1")
 
const jsUser ={
    name : "gaurav",
    [mySym]:"mykey1",
    "full name":"gaurav jha",
    age: 21,
    location:"jaipur",
    email:  "gaurav@google.com",
    isLoggedIn: false,
    lastLoginDays:["monday","wednesday"]
}

// console.log(jsUser.email)
// console.log(jsUser["full name"]);

// console.log(typeof jsUser[mySym]);

// jsUser.email = "gaurav@chatgpt.com"
// // Object.freeze(jsUser)
// jsUser.email = "gaurav@microsoft.com"
// // console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user")
}
console.log(jsUser.greeting());


jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}. your email is ${this.email}.`)
}

console.log(jsUser.greetingTwo())
