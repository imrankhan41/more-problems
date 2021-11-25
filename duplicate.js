const myNames = ['abul', 'babul', 'cabul','dabul','ebul', 'fabul','babul','gabul','abul','habul','dabul' ];

function removeDuplicate(names){
    const unique = [];
    // for(let i=0;i<names.length;i++){
    //     const element = names[i];
    //     console.log(element);
    // }
    for (const element of names){
        // console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const uniquNames = removeDuplicate(myNames);
console.log(uniquNames);

function removeextra(numbers){
    const unique = [];
//     for(let i = 0; i<numbers.length;i++){
//         const element = numbers[i];
       
//         if(unique.indexOf(element) == -1){
//             unique.push(element);
//         }
//     }
//     return unique;
// }
       for (const element of numbers){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
       }
       return unique;
    }
const myNumbers =[1,2,3,4,5,6,7,8,9,10,9,8,7,5,6,4,1];
const uniqueNames = removeextra(myNumbers);
console.log(uniqueNames);