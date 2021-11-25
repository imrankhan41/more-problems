// const products = [
//     {name:'laptop',price: 43000},
//     {name : 'shirt', price :500},
//     {name : 'watch', price :3680},
//     {name : 'phone', price :35000}

// ]
// let totalPrice = 0;
// for( const element of products){
//     totalPrice = totalPrice + element.price;
// }
// console.log(totalPrice);
const shoppingCart = [
    {name:'laptop',price: 43000, quantity:1},
    {name : 'shirt', price :500,quantity:8},
    {name : 'watch', price :3680,quantity:3},
    {name : 'phone', price :35000,quantity:1}

]
let totalPrice = 0;
for( const element of shoppingCart){
    totalPrice = totalPrice + element.price * element.quantity;
}
console.log(totalPrice);