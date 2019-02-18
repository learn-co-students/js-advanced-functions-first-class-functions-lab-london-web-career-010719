// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyBy) {
  return function (fare) {
    return multiplyBy * fare
  };
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(drivers, method) {
  if (method === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  } else if (method === returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
  }
}

// Shorter
//  const selectDifferentDrivers = function (drivers, whichDrivers) {
//    return whichDrivers(drivers);
//  };
