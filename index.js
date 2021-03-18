// Code your solution in this file!
const returnFirstTwoDrivers = function(drivArra) {
    const newArra = drivArra.slice(0, 2);
    return newArra;
};

const returnLastTwoDrivers = function(drivArra) {
    const newArra = drivArra.slice(drivArra.length - 2);
    return newArra;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMult){
    return function(fare) {
        return fare * fareMult;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivArra, resultFunct) {
    return resultFunct(drivArra);
}