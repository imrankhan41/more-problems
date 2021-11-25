function animalCount(miles){
    const firstAnimaldensityPerTenMiles =10;
    const secondAnimaldensityPerTenMiles =50;
    const thirdAnimaldensityPerRestMiles =100;
    if(miles<=10){
        const totalAnimals = miles * firstAnimaldensityPerTenMiles;
        return totalAnimals;
    }
    else if(miles<=20){
        const firstAnimalDense = 10 * firstAnimaldensityPerTenMiles;
        const secondAnimalDense = miles -10;
        const totalAnimals = firstAnimalDense + secondAnimalDense* 50;
        return totalAnimals;
    }
    else {
        const firstAnimalDense = 10 * firstAnimaldensityPerTenMiles;
        const secondAnimalDense = 10 * secondAnimaldensityPerTenMiles;
        const thirdAnimalDense = miles - 20;
        const totalAnimals = firstAnimalDense + secondAnimalDense + thirdAnimalDense*100                     ;
        return totalAnimals;

    }
}
const walkMiles = 35;
const output = animalCount(walkMiles);
console.log(output);