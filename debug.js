function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
};

const factorial = getFactorial(7);
console.log("factorial is:", factorial);