const obj = {
    name : "bala",
    mark : 100
}
class Person{
    constructor(firstname,mark){
        this.firstname = firstname
        this.mark = mark
    }
}
let obj2 =  new Person("bala",100)
console.log(obj2.firstname,obj2.mark)
console.log(obj2.firstname="hi",obj2.mark=90)

// array properties
let arr=[1,2,3,4,5,6,7,8]
//Foreach Property
arr.forEach((val) => {
    console.log(val)
})
// Filter Property
let filtered = arr.filter((x) => x%2==0)
console.log(filtered)
//reduce Property
let sum = arr.reduce((acc,val) => {
    return acc+val
})
console.log(sum)
// Slice Property
let copyArr = arr.slice(2,7)
console.log(copyArr)
//splice
let arr1 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr1.splice(2,5))