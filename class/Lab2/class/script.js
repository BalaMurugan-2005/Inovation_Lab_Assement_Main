let arr = [1,2,3,4,5,6,7]
/*
//of method to display arr elements
let arr = [1,2,3,4,56]
for(let x of arr){
    console.log(x)
} 
//in method to diplay all key or index value
for(let i in arr){
    console.log(i)
}
// Annoymose fuction 
// forEach method
let arr = [1,2,3,4,5]
arr.forEach((para) => {
    console.log(para)
})
//Maping method 
arr.map((value) => {
    console.log(value)
})
*/
const obj ={
    name : "bala Murugan",
    age : 19,
    garduate : false,
    graduate_Date : new Date(10/31/2005),
    noofdays : () => {
        let curr = new Date()
        return curr -obj.graduate_Date
    }
}
console.log(obj)
console.log(typeof(obj)) 
let {name,age,garduate,Date_Date,noofdays} = obj
console.log(
    Math.floor(noofdays()/(1000*3600*24))
)

















