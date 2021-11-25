// const phones = [
//     {name : 'samsung',price : 50000,camera : 10,storage : 32},
//     {name : 'walton',price : 15000,camera : 14,storage : 34},
//     {name : 'shaomi',price : 5078,
//     camera : 11,storage : 34},
//     {name : 'oppo f2',price : 7000,
//     camera : 18,storage : 34},
//     {name : 'nokia',price : 40000,
//     camera : 7,storage : 17},
//     {name : 'htc h2',price : 5000,
//     camera : 15,storage : 324}
// ]
// let cheapest = phones[0];
// for ( const element of phones){
//     if (element.price<cheapest.price){
//         cheapest=element;
//     }
// }
// console.log(cheapest);

const myPhones = [
    {name : 'samsung',price : 50000,camera : 10,storage : 32},
    {name : 'walton',price : 15000,camera : 14,storage : 34},
    {name : 'shaomi',price : 5078,
    camera : 11,storage : 34},
    {name : 'oppo f2',price : 7000,
    camera : 18,storage : 34},
    {name : 'nokia',price : 40000,
    camera : 7,storage : 17},
    {name : 'htc h2',price : 5000,
    camera : 15,storage : 324}
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for ( const element of phones){
        if (element.price<cheapest.price){
            cheapest=element;
        }
    }
    return cheapest;
}
const output = cheapestPhone(myPhones)
console.log(output);