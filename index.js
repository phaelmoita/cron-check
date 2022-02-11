const parser = require('cron-parser');

function match(expression, date) {
    try {
        let data = parser.parseExpression(expression).fields;

        if (
        data.second.includes(date.getSeconds()) &&
        data.minute.includes(date.getMinutes()) &&
        data.hour.includes(date.getHours()) &&
        data.dayOfMonth.includes(date.getDate()) &&
        data.month.includes(date.getMonth()) &&
        data.dayOfWeek.includes(date.getDay())
        ) {
            return true
        }

        return false;

    } catch (e) {
        return false;
    }
}

function match_moment(expression, moment_date) {
    try {
        let data = parser.parseExpression(expression).fields;

        if (
        data.second.includes(moment_date.second()) &&
        data.minute.includes(moment_date.minute()) &&
        data.hour.includes(moment_date.hour()) &&
        data.dayOfMonth.includes(moment_date.date()) &&
        data.month.includes(moment_date.month()) &&
        data.dayOfWeek.includes(moment_date.day())
        ) {
            return true
        }

        return false;

    } catch (e) {
        return false;
    }
}

module.exports = {
    match,
    match_moment
} 