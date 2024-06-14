// 3.Styling
let head = document.getElementById('heading')
let btn = document.getElementById('btn');
head.style.color = "orange"
head.style.borderBottom = "2px solid yellow"
// 1.getAttribute()
let image =document.getElementsByTagName('img')
console.log(image[0].getAttribute('src'))
console.log(image[0].getAttribute('alt'))
// 2.setAttribute()
image[0].setAttribute('alt',"the value have been changed")
console.log(image[0].getAttribute('alt'))
image[0].setAttribute('src',"hairstyle2.jpeg")

// 4.change bg
function changeBackground(){
    document.getElementById('btn').style.visibility = 'hidden';
    document.body.style.backgroundColor = "pink";
    image[0].setAttribute('src',"rikonavt-oEWdQsbRVZk-unsplash.jpg")
    image[0].style.height="400px";
    image[0].style.width="300px";
    // image[0].remove();
}

// 6. on keydown
document.body.addEventListener("keydown", function printMsg(e){
    console.log("i am clicked");
    console.log(e);
    // console.log(e.key);
}
)
// function printMsg(){
//     console.log("i am clicked");
// }

btn.onclick = changeBackground;

document.body.onkeydown = printMsg;