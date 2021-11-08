function AddToCart(quantity,productName="elma") {
    console.log("sepete eklendi:ürün:"+productName+" adet :" +quantity)
}
//AddToCart("elma")
AddToCart("10")
//AddToCart("karpuz")
let sayHello= ()=>{
console.log("hello world!!")

}
sayHello( )
let sayHello2=function () {
    console.log("hello world2!!")
}
sayHello2()
function AddToCart2(productName,quantity,unitPrice) {

}
AddToCart2("elma",2,5)
AddToCart2("armut",2,20)
AddToCart2("limon",3,15)

let product1={productName:"elma",unitPrice:10,quantity:2}

function AddToCart3(product) {
    console.log("Ürün : "+product.productName+" Adet: "+product.quantity+" kilogram fiyatı: "+product.unitPrice)
}
AddToCart3(product1)

function AddToCart4(x) {
console.log(products)
}

let products=[
    {productName:"elma",unitPrice:10,quantity:2},
    {productName:"mandalina",unitPrice:2,quantity:3},
    {productName:"kivi",unitPrice:15,quantity:2}
]
AddToCart4(products)

//function Add(number1, number2) {
  //  console.log(number1+number2)
//}
//function Add2(number1, number2,number3) {
 //   console.log(number1+number2+number3)
//}
//function Add3(number1, number2,number3,number4) {
//    console.log(number1+number2+number3+number4)
//}
//Add(20,30)

function Add(bisey,...numbers) {

let total =0;
for (let i = 0; i < numbers.length; i++) {
    total =total+ numbers[i];
    }
console.log(total)
console.log(bisey)
}
Add(20,30,50)
//Add(20,30,40)
//Add(20,30,40,50)
//Add(10,20,30,40,50)

let numbers=[20,30,30,10,500,600]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name:"iç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["ankara","konya"],
        ["istanbul","bursa"],
        ["sinop","trabzon"],
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newproductName, newQuantity,newUnitPrice