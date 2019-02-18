// Code your solution in this file!


const returnFirstTwoDrivers = function (drivers) {
  const result = []
    result.push(drivers[0], drivers[1])
    return result
};

const returnLastTwoDrivers = function (drivers) {
  const result = []
    result.push(drivers[2], drivers[3])
    return result
};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function fare(x) {
  function inside(x) {
    return x * x;
  }
  return inside;
}

const fareDoubler = function fare(x) {
    return x * 2;
  return fare;
}

const fareTripler = function fare(x) {
    return x * 3;
  return fare;
}

const fetchSpecifiedDrivers = function (driversArray, driversSelection) {
  return driversSelection(driversArray);
};
