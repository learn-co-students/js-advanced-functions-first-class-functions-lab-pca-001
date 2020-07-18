function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplyPrice) {
  return function (price) {
    return multiplyPrice * price;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, chooseDrivers) {
  return chooseDrivers(drivers);
};