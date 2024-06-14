let head=document.getElementById("heading");
let image=document.getElementById("myImage");
let div2=document.getElementById("div2");


head.style.borderBottom = "2px solid red"
let image3=document.getElementById("image3");
let button=document.getElementById("button");
let source =image.getAttribute('src')
console.log(source)

function changeonClick() {
    button.style.visibility = 'hidden';
    image.setAttribute('src', 'nursery.jpeg');
    image.style.height = "200px";
    image.style.width = "200px";
    image.style.margin = "50px";
  
    let image2 = document.createElement("img");
    image2.setAttribute('src', 'highschool.jpeg');
    image2.style.height = "200px";
    image2.style.width = "200px";
    image2.style.margin = "50px";
  
    let image3 = document.createElement("img");
    image3.setAttribute('src', 'graduation.jpeg');
    image3.style.height = "200px";
    image3.style.width = "200px";
    image3.style.margin = "50px";
  
    let div2 = document.getElementById("div2");
    div2.style.display = "flex"; // Add this line to enable flexbox layout
    div2.append(image, image2, image3);
  
    document.body.style.backgroundColor = "pink";
  }
  
  button.onclick = changeonClick;
  