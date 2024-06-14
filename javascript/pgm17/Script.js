// let itemInput = document.getElementById("ItemTitle")
// let priceInput = document.getElementById("price")
// let btn = document.getElementById("btn")
// let table = document.getElementById("tb")

// function addItems(){
//     let item = itemInput.value
//     let price = priceInput.value
//     let total = document.getElementById("total")
//     let priceArr = []
//     let sum=0

//     if(item !=="" && price !==""){
//         let row = document.createElement('tr')
//         row.innerHTML=`<td>${item}</td> <td>${price}</td>`        
//         for(let i=0;i<priceArr.length;i++){
//             sum+=priceArr[i]
//         }
//         total.innerHTML=sum
//         table.append(row)
//         console.log(row)
//     }

// }

// btn.addEventListener('click',addItems)

let itemInput = document.getElementById("ItemTitle");
let priceInput = document.getElementById("price");
let btn = document.getElementById("btn");
let table = document.getElementById("tb");
let total = document.getElementById("total");
let priceArr = [];
let sum = 0;

function addItems() {
  let item = itemInput.value;
  let price = parseInt(priceInput.value); // Convert price to a floating-point number

  if (item !== "" && !isNaN(price)) {
    let row = document.createElement('tr');
    row.innerHTML = `<td>${item}</td><td>${price}</td>`;
    table.append(row);
    
    priceArr.push(price); // Add the new price to the priceArr array

    sum = priceArr.reduce((s, curr) => s + curr, 0); // Calculate the sum using Array.reduce()
    total.innerHTML = sum

    itemInput.value = ""; // Clear input fields after adding an item
    priceInput.value = "";
  }
}

btn.addEventListener('click', addItems);
