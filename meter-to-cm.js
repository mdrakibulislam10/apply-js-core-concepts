function meterToCm(meter) {
    const cm = meter * 100;
    return cm;
};

const meter = 20;
const cm = meterToCm(meter);
console.log(cm);