function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, partOfName){
    let lengthOfName = partOfName.length;
        return list.filter(function (driverName) {
        return driverName.slice(0, lengthOfName) === partOfName;
    });
}

function matchName(list, name){
    return list.filter(function (driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}