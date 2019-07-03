// Code your solution in this file!

// const returnFirstTwoDrivers = function (drivers){
//     return drivers.forEach(driver => {
//         driver.indexOf<2
        
//     });

// }
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
// function (){
//     let newArray =[]
//     selectingDrivers[0] = returnFirstTwoDrivers
//     selectingDrivers[1] = returnLastTwoDrivers
//     newArray.push(selectingDrivers[0], selectingDrivers[1])
//     return newArray
// }

  createFareMultiplier = function(fare){
    return function(x){
        return fare * x
    }
}

const fareDoubler = function (fn){
        return fn * 2
}

const fareTripler = function (fn) {
    return fn * 3
}
    
function fetchSpecifiedDrivers(drivers,fn){
    return fn(drivers)
}

