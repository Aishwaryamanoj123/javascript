let button = document.getElementById('btn')
let para = document.getElementById('para')

function changeContent(){
  para.innerHTML= "I changed my content for the first time"
}

button.onclick = changeContent