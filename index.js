// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];
  
  const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };
  
  let fareDoubler = createFareMultiplier(2);
  
  let fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };