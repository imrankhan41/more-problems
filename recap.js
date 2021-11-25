function largestElement(numbers){
    var max = numbers[0];
    for(i =0; i<numbers.length;i++){
        var element = numbers[i];
        if(element>max){
            max = element;
        }
    }
    return max;
}
var myNumbers = [10,11,121];
var output = largestElement(myNumbers);
console.log(output);

function smallestElement(number){
    var min = number[0];
    for(i =0; i<number.length;i++){
        var elements = number[i];
        if(elements < min){
            min = elements;
        }
    }
    return min;
}
var myNumber = [10,11,121];
var output1 = smallestElement(myNumber);
console.log(output1);
