// 1. 
// 1.1 hour to minutes
function hourToMin(hour) {
    const minutes = hour * 60;
    return minutes;
};

const hour = 2;
const minutes = hourToMin(hour);
// console.log(minutes);

// 1.2 minute to seconds
function minToSec(minute) {
    return minute * 60;
};

const minute = minToSec(10);
// console.log(minute);

// 2. find leap year and return a arr
function findLeapYear(years) {
    let leapYears = [];
    for (let i = 0; i < years.length; i++) {
        const year = years[i];
        if (((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0))) {
            leapYears.push(year);
        }
    }
    return leapYears;
};

const years = [2023, 2024, 2025, 2028, 2030];
// console.log(findLeapYear(years));

// 3. sum of arr odd num
function findOddSum(numbers) {
    let oddSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 !== 0) {
            // oddSum = oddSum + number;
            oddSum += number;
        }
    }
    return oddSum;
}

const numbers = findOddSum([5, 7, 8, 10, 45, 30]);
// console.log(numbers);

// 4. sum of arr even num
function findEvenSum(nums) {
    let evenSum = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 === 0) {
            evenSum += num;
        }
    }
    return evenSum;
}

console.log(findEvenSum([5, 7, 8, 10, 45, 30]));