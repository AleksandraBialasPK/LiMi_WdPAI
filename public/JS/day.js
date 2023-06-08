const day = document.querySelector(".day"),
    prevDayBtn = document.querySelector(".prev-day-btn"),
    nextDayBtn = document.querySelector(".next-day-btn"),
    todayBtn = document.querySelector(".today-btn");

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

monthsWith30Days = ["April", "June", "September", "November"];
monthsWith31Days = ["January", "March", "May", "July", "August", "October", "December"];

const date = new Date();

let currentDay = date.getDay();
let currentDate = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

function renderDay() {
    day.innerHTML = `${days[currentDay]} <br> ${currentDate} ${months[currentMonth]} ${currentYear}`;
}

renderDay();

function isLeapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

function nextMonth() {
    currentDate = 1;
    currentMonth++;
}

function checkIfNextDayAndIncrement(month){
    if((month+1) > 11){
        currentDate = 1;
        currentMonth = 0;
        currentYear++;
    }
    else {
        nextMonth()
    }
}

nextDayBtn.addEventListener("click", () => {
    currentDay++;
    currentDate++;

    if (monthsWith30Days.includes(months[currentMonth]) && currentDate > 30) {
        nextMonth();
    }
    else if (monthsWith31Days.includes(months[currentMonth]) && currentDate > 31) {
        checkIfNextDayAndIncrement(currentMonth);
    }
    else if (currentMonth === 1){
        if(isLeapYear(currentYear)) {
            if(currentDate > 29) {
                nextMonth();
            }
        }
        else if (currentDate > 28){
            nextMonth();
        }
    }

    if (currentDay > 6) {
        currentDay = 0;
    }
    renderDay();
});

prevDayBtn.addEventListener("click", () => {
    currentDay--;
    currentDate--;
    let prevMonth = currentMonth-1;

    if (currentDate < 1){
        if (monthsWith30Days.includes(months[prevMonth])) {
            currentDate = 30;
            currentMonth--;
            isNextOrPrevYear(currentMonth);
        }
        else if (monthsWith31Days.includes(months[prevMonth])){
            currentDate = 31;
            currentMonth--;
            isNextOrPrevYear(currentMonth);
        }
        else if (currentMonth === 1){
            if(isLeapYear(currentYear)) {
                currentDate = 29;
                currentMonth--;
            }
            currentDate = 28;
            currentMonth--;
        }
    }

    if (currentDay < 0) {
        currentDay = 6;
    }
    renderDay();
});