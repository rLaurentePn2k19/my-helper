const removeDuplicates = (arr) => {
    let seen = {};
    return arr.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

export default {
    removeDuplicates: removeDuplicates
}