// Arrays in javascript...

// 1.  spread operator
// 2.  foreach
// 3.  map
// 4. filter
// 5. reduce

// 1. create 2 arrays
// 2. create a third array to strore contents of both arrays
// 3. use foreach and convert all items of new array into its double
// 4. use map to convert all items added with 5
// 5. use filter to find only even numbers from the original array
// 6. use reduce function to add up all values in an array
// 7. use filter to get all items greater than 50



let arr=[10,20,30,40]      
let arr2=[50,60,70,80,90]
let arr3=[...arr,...arr2]
console.log(arr3)

arr=[...arr,...arr2]
console.log(arr)

// arr.forEach(function iterator(item){
//     item=item*2
//     console.log(item)
// })

let total = arr.reduce((sum,item)=>{
    sum=sum+item
    return sum
},0)


arr.forEach((item)=>{
    item=item*2
    console.log(item)
})

let result=arr.map((item)=>{
    item=item*5
    return item
}) 

console.log(result)

let res2= arr.filter((i)=>{return item>2})

let res=arr.filter((item)=>{
    if(item>50)
        return item
}) 
console.log(res)

let abc = arr.filter((item)=>{
    return item>50
}) 

let students=[{name:"Manu",age:"12",marks:40},{name:"Sayooj",age:"22",marks:70},{name:"Saurav",age:"16",marks:90}]
let st = students.map((item)=>{
    item.name=item.name.toUpperCase()
    item.age=Number(item.age)
    return item
})
console.log(st)

let marks=students.filter((item)=>{
    return item.marks>70
}) 
console.log(marks)

let overallMarks = students.reduce((sum,item)=>{
    sum=sum+item.marks
    return sum
},0)
console.log(overallMarks)

// return total marks of students with marks >60 considering 20 marks were given to students 
// with mrks<50

let graceMarkedStud = students.filter((item)=>{
    if(item.marks<50){
        item.marks+=20
        return item
    }
        
})
console.log(graceMarkedStud)

let passedStud=students.filter((item)=>{
    if(item.marks>60){
        return item
    }
})
console.log(passedStud)

let totalMarks = passedStud.reduce((sum,item)=>{
    sum=sum+item.marks
    return sum
})
console.log(totalMarks)