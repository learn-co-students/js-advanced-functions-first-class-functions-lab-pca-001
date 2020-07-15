// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2) // start at index 0 and go two
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2) //grab the last two
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
  return function(fare) {
    return fare * integer
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, returnLastTwoDrivers) {
  return returnLastTwoDrivers(drivers)
}