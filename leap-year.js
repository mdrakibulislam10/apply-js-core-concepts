// simplified way
function isLeapYear(year) {
    const reminder = year % 4;
    if (reminder === 0) {
        return true;
    }
    // else {
    return false;
    // }
};

const myYear = isLeapYear(2001);
// console.log("my year:", myYear);

const herYear = isLeapYear(2024);
// console.log("her year:", herYear);



// original system
function leapYear(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return (year + " " + "is leap year");
    }
    return (year + " " + "is not leap year");
};

const checkYear = leapYear(2024);
console.log(checkYear);