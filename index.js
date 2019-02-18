const returnFirstTwoDrivers = function(array) {
  return array.slice(0,2)
}

const returnLastTwoDrivers = function(array) {
  return array.slice(-2)
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const fareDoubler = function(fare) {
  return fare * 2
}

const fareTripler = function(fare) {
  return fare * 3
}

const fareQuintupler = function(fare) {
  return fare * 5
}

function createFareMultiplier(multiplier) {
  switch(multiplier) {
    case 2:
      return fareDoubler
    case 3:
      return fareTripler
    case 5:
      return fareQuintupler
    }
}

function fetchSpecifiedDrivers(array, func) {
  return func(array)
}
