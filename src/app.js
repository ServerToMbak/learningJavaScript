// console.log("merhaba kodalma io")
// const euroDun=11.2
// console.log(euroDun)
// let konutKredileri=["konut kredisi","emlak konut kredisi","kamu konut kredisi"]
// console.log(konutKredileri)

// console.log("<ul>")
// for (let i = 0; i <konutKredileri.length; i++) {
//     console.log("<li>"+konutKredileri[i]+"<li>")    
// }
//  console.log("</ul>")
// console.log("merhaba");

// let student={
//     id:1, name:"engin"
// }
// let ögrenci={
//     id:2, name:"nurullah"
// }
// //console.log(student)

// function save(student,message="server") {
//     console.log(student.name+message)
// }
// save(student, " tombak");
// save(ögrenci, " arslan ")

let showProducts=function (id, ...products) {
    console.log(id)
    console.log(products)
}
showProducts(10,"elma","karpuz","armut");

let points=[1,2,3,4,50,6,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."abc","d",..."efg","h")


let populations=[10000,20000,30000,[40000,50000]]
let[small,medium,high,[max,very]]=populations
console.log(small)
console.log(medium)
console.log(max)
function someFunction([small1,small2]) {
    console.log(small1)
    console.log(small2)
}
someFunction(populations)



