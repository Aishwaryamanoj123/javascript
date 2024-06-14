let drop = document.getElementById('dropdown');
let btn = document.getElementById('btn');
let res = document.getElementById('result');


let arr= [
    {id:1, name:"Mohan", age:"24", profession:"Admin"},
    {id:2, name:"Muaz", age:"19", profession:"Admin"},
    {id:3, name:"Shada", age:"15", profession:"Developer"}
]

// task3 - add more objects to the array using spread operator 
let arr2= [
    {id:4, name:"Sonal", age:"24", profession:"Admin"},
    {id:5, name:"Shilpa", age:"19", profession:"Admin"},
    {id:6, name:"Anirudh", age:"15", profession:"Developer"}
]

arr=[...arr,...arr2]
console.log(arr)

// 1.task 1 - change string age to int age
arr.map(function(item){
    item.age = parseInt(item.age)
})
console.log(arr)

// task 2 - change age of shada to 20

arr.forEach(function(item){
    if(item.name == "Shada"){
        item.age = 20
    }
})
console.log(arr)
// 5. task 5 - putting each item in cards
function filterFunction(){
    res.innerHTML="";
    let dropdownValue = dropdown.value;
    console.log(dropdownValue);
    if(dropdownValue==="profession"){
        alert("Choose a profession");
        return
    }
    arr.forEach((item)=>{
        console.log(item);
        if(item.profession === dropdownValue){
            let div = document.createElement('div');
            // div.innerText=item.id + "     Name: " + item.name + "         Profession: " + item.profession + " Age: " + item.age;
            // div.innerHTML = "<p>" + item.id + "Name: " + item.name + "</p>" + "<p>Profession: " + item.profession + "</p>" + "<p>Age: " + item.age + "</p>";
            div.innerHTML = "<span>" + item.id + "</span>" + "<span>Name: " + item.name + "</span>" + "<span>Profession: " + item.profession + "</span>" + "<span>Age: " + item.age + "</span>";
            console.log(div);
            res.append(div);
        }
    })
}

btn.addEventListener("click", filterFunction);
// btn.onclick = filterFunction

//filter all items with profession admin
// let arrAdmin = arr.filter((item)=>{
//     return item.profession == "Admin";
// })
// console.log(arrAdmin);