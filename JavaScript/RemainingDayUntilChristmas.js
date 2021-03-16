const getRemainingDayTilChristmas = (dateNow) => {
    var christmas_day = new Date(dateNow.getFullYear(), 11, 25)

    // To Calculate next year's Christmas if passed already. 
    if (dateNow.getMonth() == 11 && dateNow.getdate() > 25)
        christmas_day.setFullYear(christmas_day.getFullYear() + 1)

    // To Calculate the result in milliseconds and then converting into days 
    var Result = Math.round(christmas_day.getTime() - dateNow.getTime()) / (one_day);

    // To remove the decimals from the (Result) resulting days value 
    var Final_Result = Result.toFixed(0);

    return Final_Result
}


export default {
    getRemainingDayTilChristmas: getRemainingDayTilChristmas
}