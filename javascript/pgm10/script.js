let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let image = document.getElementById('bulb')
console.log(image)
// let source = image.getAttribute('src')
// console.log(source)

function lighton(){
    image.setAttribute('src','bulbon.jpeg')
}

function lightoff(){
    image.setAttribute('src','bulboff.jpg')
}

btn1.onclick=lighton
btn2.onclick=lightoff