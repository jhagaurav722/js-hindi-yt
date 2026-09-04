const user= {
    username:"gaurav",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to the website`)
    }
}

// user.welcomeMessage()
// user.username="aryan"
// user.welcomeMessage()

// // console.log(this)


// function declaration------

// function chai(){
//     let username="gaurav"
//     console.log(this.username)
// }

// chai()

// function expression------

// const chai= function(){
//     let username ="gaurav"
//     console.log(this.username)
// }

// chai()


// arrow function-----

// const chai =() => {
//     let username = "gaurav"
//     console.log(this.username)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo =(num1, num2)=> num1+num2

// const addTwo =(num1, num2)=> (num1+num2)
// console.log(addTwo(3,6))

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo())


