const returnFirstTwoDrivers = function(drivers){ 
    new_drivers = [...drivers] 
    return new_drivers.splice(0,2) 
}

const returnLastTwoDrivers = function(drivers){ 
    new_drivers = [...drivers] 
    return new_drivers.splice(-2) 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare) { return fare * int }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(drivers, fn){
    return fn(drivers)
}