// Code your solution in this file

function findMatching(drivers, name){
    const driversFilt = drivers.filter(driver => driver.toUpperCase() === name.toUpperCase());
    return driversFilt;
}


function fuzzyMatch(drivers, str){
    const driversFilt = drivers.filter(driver => driver.charAt(0) === str.charAt(0));
    return driversFilt;
}

function matchName(drivers, str){
    const driversFilt = drivers.filter(driver => driver['name'] === str);
    return driversFilt;
}