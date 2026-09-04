//immediately invoked function expression----
// It is defined and executed immediately.

// (function chai() {
//     const username= "gaurav";
//     console.log(`hello ${username}, application started!`)
// })()

// (() => {
//   let message = "hello";
//   console.log("hello gaurav, application started!");
// })();

((sayMyName)=>{
    console.log(`hi ${sayMyName}, welcome!`);
})('gaurav')
