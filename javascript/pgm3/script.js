let msg = document.getElementById('msg')
let btn = document.getElementById('btn')
let list = document.getElementById('listDiv')

function addElement(){
   if(msg.value != ""){
      let li = document.createElement("li");
      li.innerText = msg.value;
      list.append(li);
   }
   else
   {
      alert("Please enter your message");
   }

}

btn.onclick=addElement;