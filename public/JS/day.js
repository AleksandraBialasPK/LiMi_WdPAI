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
let currentMonthName = months[currentMonth];

function renderDay() {
    day.innerHTML = `${days[currentDay]} <br> ${currentDate} ${months[currentMonth]} ${currentYear}`;
}

renderDay();

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
function isNextOrPrevYear(month){
    if(month++ > 11){
        currentYear++;
        month = 0;
    }
    else if(month-- < 0){
        currentYear--;
        month = 11;
    }
}

nextDayBtn.addEventListener("click", () => {
    currentDay++;
    currentDate++;

    if (monthsWith30Days.includes(months[currentMonth]) && currentDate > 30) {
        currentDate = 1;
        currentMonth++;
        isNextOrPrevYear(currentMonth);
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
        }
        else if (monthsWith31Days.includes(months[prevMonth])){
            currentDate = 31;
            currentMonth--;
        }
        else{
            if(isLeapYear()) {
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