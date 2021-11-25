// const greetings =" hello, how are you?";

// function reverseString(text){
//     let reverse = '';
//     for(const letter of text){
        
//         reverse = letter + reverse;
//     }

//     return reverse;
// }
// const output = reverseString(greetings);
// console.log(output);

function reverseSalam(texts){
    let reversed = '';
    for(const letter of texts){
        reversed = letter + reversed;
    }
    return reversed;
}
const salam = "assalamualaikum vaia !";
const output =  reverseSalam(salam);
console.log(output);