let result = document.getElementById('result')
let btn = document.getElementById('btn')
let colours = ["red","blue","green","yellow","orange","purple","pink","brown","black","white","grey","silver","gold"]

function generateRandomNumber(){
    let num = Math.floor(Math.random() * 10)
    let randcolor=colours[num]
    document.body.style.backgroundColor=randcolor
    // let rand=document.createElement('li')
    // rand.innerText=Math.floor(Math.random() * 100)
    // result.append(rand)
    // console.log(Math.floor(Math.random() * 100)) 
}

btn.onclick=generateRandomNumber