function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result *= i;
    }
    return result;
};

const number = 7;
const fact = factorial(number);
console.log("factorial of:", number, fact);