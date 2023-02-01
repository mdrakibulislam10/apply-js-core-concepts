// 1. check leap year and return true
function leapYear(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
};

const year = 2023;
// console.log(leapYear(year));

// 2. check number odd or even
function checkOddEven(number) {
    if (number % 2 !== 0) {
        return false;
    }
    return true;
};

const age = 21;
const number = checkOddEven(age);
// console.log(number);

// 3. hour to minutes
function hourToMin(hour) {
    return hour * 60;
};

const hr = hourToMin(2);
console.log(hr, "minutes.");