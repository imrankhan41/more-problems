/* 
wood for chair = 3cft
wood for table =10cft
wood for bed = 50 cft 
*/
function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const perChairwood = 3;
    const pertablewood =10;
    const perBedwood =50;
    const chairWoodQuantity = chairQuantity * perChairwood;
    const tableWoodQuantity = tableQuantity * pertablewood;
    const bedWoodQuantity = bedQuantity * perBedwood;

    const totalWood = chairWoodQuantity+ tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
const output = woodCalculator(10,10,10);
console.log(output);