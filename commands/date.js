const today = new Date();
const months = [['January', 31], ['Febuary', 28], ['March', 31], ['April', 30], 
        ['May', 31], ['June', 30], ['July', 31], ['August', 31], ['September', 30], 
        ['October', 31], ['November', 30], ['December', 31]]

const getCurrentMonth = () => {
    return today.getMonth() + 1;
}

const getCurrentDay = () => {
    return today.getDate();
}
const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();

const getBetween = (current, past, currentDay) => {
    var difference = 0;
    for (i = past; i<current-1; i++) {
        difference += months[i][1];
    }
    return difference + getCurrentDay();
}

const getTill = (current, future, currentDay) => {
    var difference = 0;
    for (var i = current-1; i<future; i++) {
        difference += months[i][1];
    }
    return -1*(difference - getCurrentDay() + 1);
}

const getDate = (month) => {
    past = getBetween(getCurrentMonth(), month-1, getCurrentDay()) * (month<=getCurrentMonth());
    future = getTill((getCurrentMonth()), month-1, getCurrentDay()) * (month>getCurrentMonth());

    return `${months[month-1][0]} ${(past + future)}`;
}

const getAll = () => {
    var message = "";
    for (var i = 1; i<months.length+1; i++) {
        message += `${getDate(i)}\n`;
    }

    return message;
}

const getRan = () => {
    return Math.floor((Math.random() * 12) + 1);
}

module.exports = {
    name: 'date',
    description: 'returns the date',
    execute(message, args) {
        if (args[0] === "*") {
            message.channel.send(getAll());
            return;
        }

        message.channel.send(getDate(getRan()));
        return;
    }
}