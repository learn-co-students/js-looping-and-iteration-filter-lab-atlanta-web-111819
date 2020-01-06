function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase()
    });
}

function fuzzyMatch(drivers, startChars) {
    return drivers.filter(function(driver) {
        return driver.startsWith(startChars);
    });
}

function matchName(drivers, name) {
    return drivers.filter(function(driverData) {
        return driverData.name === name
    });
}
