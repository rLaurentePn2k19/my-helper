const getTimeDifferenceBetweenTwoDates = (date1, date2) => {
    // To calculate the time difference of two dates 
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return {
        'difference_in_time': Difference_In_Time,
        'difference_in_days': Difference_In_Days
    }
}


export default {
    getTimeDifferenceBetweenTwoDates: getTimeDifferenceBetweenTwoDates
}