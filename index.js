// Code your solution in this file
function findMatching(obj, name) {
    let array = [];
    for (const key in obj) {
        if (obj[key].toLowerCase() == name.toLowerCase()) {
        array.push(obj[key]);
        }
    }
    return array;
}

function fuzzyMatch(obj, shortname) {
    return obj.filter(function (name) {
        return name.slice(0, shortname.length) === shortname;
    });
}

function matchName(obj, name) {
    return obj.filter(function (drivername) {
        return drivername.name.toLowerCase() === name.toLowerCase();
    });
}