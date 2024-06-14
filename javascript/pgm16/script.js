let input = document.getElementById("input")
let length = document.getElementById("l")
// whenever on input ,thers a keypress check count
input.addEventListener('keypress',()=>{
    let string = input.value
    console.log(string.length)
    length.innerHTML=string.length+1
})
// to check for particular key do condition
// if(e.key!=="Escape")