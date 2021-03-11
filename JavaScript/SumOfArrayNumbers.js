
const sumArrayNumbers = (arrNum) => {
    if (toString.call(arrNum) !== "[object Array]")
        return false;

    var total = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (isNaN(arrNum[i])) {
            continue;
        }
        total += Number(arrNum[i]);
    }
    return total;
}

export default {
    sumArrayNumbers: sumArrayNumbers
}