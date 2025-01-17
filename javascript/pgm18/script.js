// Backend data obtained as JSON file -- > ecommerce site data
// parse it and show the data on the page in the form of cards
// show te image,name price, rating and nuber of reviews in table
// create a button to sort the products by price in ascending or descending order
// button to show all products in stock

let data = [
    { id: 1, img: "https://picsum.photos/200/300", name: "Shoes", price: 1000, rating: 4.5, inStock: true },
    { id: 2, img: "https://picsum.photos/200/300", name: "Pen", price: 40, rating: 4.9, inStock: false },
    { id: 3, img: "https://picsum.photos/200/300", name: "Mobile Phones", price: 20000, rating: 3.9, inStock: true },
    { id: 4, img: "https://picsum.photos/200/300", name: "Paper", price: 10, rating: 4.0, inStock: false },
    { id: 5, img: "https://picsum.photos/200/300", name: "Laptop", price: 100000, rating: 4.5, inStock: true },
]

let searchInput = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");

let products = document.getElementById("products");
let sortPriceInc = document.getElementById("sortPriceInc");
let sortPriceDec = document.getElementById("sortPriceDec");
let showStocksBtn = document.getElementById("showStocks");


sortPriceInc.addEventListener("click", sortIncreasing);
sortPriceDec.addEventListener("click", sortDecreasing);
showStocksBtn.addEventListener("click", showStocks);
searchBtn.addEventListener("click", search);

function loadData(data) {
    products.innerHTML = "";
    data.map((item) => {
        let lItem = document.createElement("tr");
        lItem.innerHTML = `
           <td> ${item.id}  </td> 
           <td> <img src="${item.img}" height="40" widht = "40">  </td> 
           <td> ${item.name}  </td> 
           <td> ${item.price}  </td>
           <td> ${item.rating}  </td>
           <td>  ${item.inStock ? "In Stock" : "Out of Stock"} </td> `
        products.append(lItem);
    })
}

loadData(data);
 
function sortIncreasing() {
    let increasingData = data.sort((item1, item2) => {
        //  -1 means a should come before b (same order as a, b)
        // 1 means b should come before a (reverse order of a, b)
        // 0 means no change in order

        if (item1.price < item2.price) return -1;
        else if (item1.price > item2.price) return 1;
        else return 0;
    })
    console.log(increasingData)
    loadData(increasingData);
}

function sortDecreasing() {
    let decreasingData = data.sort((a, b) => {
        if (a.price < b.price) return 1
        else if (a.price > b.price) return -1
        else return 0;
    })
    loadData(decreasingData);
}

function showStocks() {
    let inStocksData = data.filter((item) => {
        return item.inStock;
    })

    loadData(inStocksData);
}

function search() {
    let s = searchInput.value;
    let matchedItems = data.filter((item) => {
        return item.name.toLowerCase().includes(s.toLowerCase());
    })
    console.log(matchedItems)
    loadData(matchedItems);
}