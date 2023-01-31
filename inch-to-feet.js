/* const myInches = 12;
const myFeet = myInches / 12;  // 1 feet = 12 inch.
// console.log(myFeet);

const dadaInch = 144;
const dadaFeet = dadaInch / 12;
// console.log("data feet", dadaFeet);

const dadiInch = 60;
const dadiFeet = dadiInch / 12;
// console.log(dadiFeet); */

// with function
function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
};

const dadaInch = 144;
const dadaFeet = inchToFeet(dadaInch);
// console.log(dadaFeet);

const nanaInch = 168;
const nanaFeet = inchToFeet(nanaInch);
console.log("nana feet", nanaFeet);