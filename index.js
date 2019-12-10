// Code your solution in this file
function findMatching(drivers, nameString) {
    let array = []
    for (const element of drivers) {
        if (element.toLowerCase() === nameString.toLowerCase() ){
            array.push(element)
        }
    }
    return array
}

function fuzzyMatch(drivers, nameString) {
    let array = []
    for (const element of drivers) {
        if ((element.toLowerCase()).slice(0, nameString.length) === nameString.toLowerCase()) {
            array.push(element)
        }
    }
    return array
}

function matchName(drivers, nameString) {
    let array = []
    for (const element of drivers) {
        if (element.name === nameString) {
            array.push(element)
        }
    }
    return array
}