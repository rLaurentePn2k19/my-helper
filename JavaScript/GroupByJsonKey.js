const groupByJsonKey = (arr, key) => { // this function will group a json base on the key passed in the second parameter
    return arr.reduce(function (rv, x) { // first parameter is array, second is the json key which is a string
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv; // return an object
    }, {});
}

export default {
    groupByJsonKey: groupByJsonKey
}