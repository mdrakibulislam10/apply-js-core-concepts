// 1 * 2 * 3 * 4 * 5 * 6 * 7

// increment
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        // result = result * i;
        result *= i;
    }
    return result;
};

const result = factorial(9);
// console.log(result);


// decrement / reverse
function facto(num) {
    let factoResult = 1;
    for (let i = num; i >= 1; i--) {
        // factoResult = factoResult * i;
        factoResult *= i;
    }
    return factoResult;
};

const factoResult = facto(9);
console.log(factoResult);