// Code your solution in this file!

const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers){
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

let createFareMultiplier = function(multiplier) {
  return function (fare) {
    return fare*multiplier;
  };
}

function fareDoubler(fare) {
  return fare*2;
}

function fareTripler(fare) {
  return fare*3;
}

function fetchSpecifiedDrivers(drivers,operator){
  return operator(drivers);
}
