const day = document.querySelector(".day"),
    prevDayBtn = document.querySelector(".prev-day-btn"),
    nextDayBtn = document.querySelector(".next-day-btn"),
    daysContainer = document.querySelector(".day-grid-tile-container"),
    timelineContainer = document.querySelector(".timeline");

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

const monthsWith30Days = ["April", "June", "September", "November"];
const monthsWith31Days = ["January", "March", "May", "July", "August", "October", "December"];

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

function checkIfNewYearAndIncrement(month){
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
        checkIfNewYearAndIncrement(currentMonth);
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

    if (currentDate < 1){
        if (monthsWith30Days.includes(months[currentMonth-1])) {
            currentDate = 30;
            currentMonth--;
        }
        else if (monthsWith31Days.includes(months[currentMonth-1])){
            currentDate = 31;
            currentMonth--;
        }
        else if ((currentMonth - 1) < 0){
            currentMonth = 11;
            currentYear--;
            currentDate = 31;
        }
        else if ((currentMonth - 1) === 1){
            if(isLeapYear(currentYear)) {
                currentDate = 29;
                currentMonth--;
            }
            else {
                currentDate = 28;
                currentMonth--;
            }
        }
    }

    if (currentDay < 0) {
        currentDay = 6;
    }
    renderDay();
});

function generateTimeline() {
    let hours = "";

    for (let i = 1; i <= 23; i++) {
        hours += `<div class="hour">${i}:00</div>`;
    }
    timelineContainer.innerHTML = hours;
}

generateTimeline();

function generateDay() {
    const day = `<div class="day-grid-tile"></div>`;
    daysContainer.innerHTML = day;
}

function generateBreakLines() {
    let breakLines = '';

    breakLines += `<div class="day-break-line" id="blank-day-break-line"></div>`;

    for (let i = 0; i <= 22; i++) {
        breakLines += `<div class="day-break-line"></div>`;
    }
    const dayBreakLines = document.querySelector(".day-grid-tile");
    dayBreakLines.innerHTML = breakLines;
}
generateDay();
generateBreakLines()