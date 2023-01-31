// console.log(4 / 2);
// console.log(98 / 2);
// console.log(144 / 2);
// console.log(1286 / 2);

// console.log(7 / 2);
// console.log(83 / 2);
// console.log(145 / 2);
// console.log(1287 / 2);

// console.log(4 % 2);
// console.log(98 % 2);
// console.log(144 % 2);
// console.log(1286 % 2);

// console.log(7 % 2);
// console.log(83 % 2);
// console.log(145 % 2);
// console.log(1287 % 2);

function isEven(numbers) {
    const reminder = numbers % 2;
    if (reminder === 0) {
        return true;
    }
    // else {
    //     return false;
    // }
    return false;
};

const myNumberIsEven = 303;
console.log(isEven(myNumberIsEven));

const herNumberIsEven = 30;
console.log(isEven(herNumberIsEven));
