// Code your solution in this file
function findMatching(array, name){
    return array.filter(function (driverName){
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(array,name){
    return array.filter(function (driverName){
        return driverName[0] === name[0];
    });
}

function matchName(array, name){
    return array.filter(function (matchname){
        return matchname.name === name

    })
}