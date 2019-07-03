// Code your solution in this file!

//Declare a variable with const that is assigned an anonymous function. 
//The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0], drivers[1]];
  };

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(drivers.length - 2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

// const selectingDrivers = function (drivers) {
//     return [returnFirstTwoDrivers(drivers), returnLastTwoDrivers(drivers)] 
// }

const createFareMultiplier = function(factor) {
        return function (x) {
            return factor * x
        }
}

const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3)


function fetchSpecifiedDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers)
}