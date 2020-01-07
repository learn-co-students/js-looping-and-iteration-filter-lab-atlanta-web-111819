// Code your solution in this file

function findMatching(collection, driver) {
    return collection.filter(function(name) {
        return name.toLowerCase() === driver.toLowerCase()
    });

}

function fuzzyMatch(drivers, letters) {
   return drivers.filter(function (name) {
       return name.toLowerCase().split('').splice(0, letters.length).join('') == letters.toLowerCase()
   })
}

function matchName(drivers, key) {
    return drivers.filter(function(driver) {
        return driver.name === key
    });
}