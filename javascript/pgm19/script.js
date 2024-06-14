let a=90
console.log(a)
function add(b) {
    return a+b;
}
console.log(add(20))
console.log("Hey there")

// The above code will be executed one by one => bcoz JS is synchronous(execute code one after the other)

// print hello world after 3sec

function logMsg() {
    console.log("Hello world")
}
// setTimeout(()=>{},3000)   //This is a web API  ,It takes time to execute  
// console.log("hello world")

setTimeout(logMsg,3000);            //accepts only functions, not variables       //this is callback
console.log("I will come after 3 sec")


