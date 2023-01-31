function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        // sum = sum + element;
        sum += element;
        // console.log(index, element, sum);
    }
    return sum;
};

function getOddNumbersOfAnArray(numbers) {
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 !== 0) {
            oddNumbers.push(element);
            // console.log(element);
        }
    }
    return oddNumbers;
};

const myNumbers = [12, 65, 45, 78, 32, 45, 91];

const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);

// console.log(getSumOfAnArray(myNumbers));

const oddNumbersSum = getSumOfAnArray(oddNumbers);
console.log("odd number sum", oddNumbersSum);