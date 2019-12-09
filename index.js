// Code your solution in this file
function findMatching (drivers, name) {
    return drivers.filter( function (dn) {
        return dn.toLowerCase() === name.toLowerCase() 
    });
}

function fuzzyMatch (drivers, letters) {
    let numLetters = letters.length;
    return drivers.filter( function (dn) {
        return dn.slice(0, numLetters) === letters;
    });
}

function matchName (drivers, name) {
    return drivers.filter( function (driver) {
        return driver.name.toLowerCase() === name.toLowerCase() 
    });
}
