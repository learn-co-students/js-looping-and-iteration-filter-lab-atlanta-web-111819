// Code your solution in this fi
function findMatching(array, name){
    return array.filter( function (driver){ return driver.toLowerCase() === name.toLowerCase();})
}

function fuzzyMatch(array, name){
    return array.filter( function (driver){ return driver[0] === name[0]; });
}

function matchName(array, name){
    return array.filter( function (driver){ return driver["name"] === name;})
}