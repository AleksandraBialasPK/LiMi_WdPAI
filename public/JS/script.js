const daysContainer = document.querySelector(".days"),
    nextMonthBtn = document.querySelector(".next-month-btn"),
    prevMonthBtn = document.querySelector(".prev-month-btn"),
    month = document.querySelector(".month"),
    day = document.querySelector(".day"),
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
    day.innerHTML = `${days[currentDay]} ${currentDate} ${months[currentMonth]} ${currentYear}`;
}

renderDay();

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

    if (currentDate > 30  && monthsWith30Days.includes(months[currentMonth])) {
        currentDate = 1;
        currentMonth++;
        isNextOrPrevYear(currentMonth);
    }
    else if (currentDate > 31 && monthsWith31Days.includes(months[currentMonth])){
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

    if (currentDate < 1 && monthsWith30Days.includes(months[prevMonth])) {
        currentDate = 30;
        currentMonth--;
    }
    else if (currentDate < 1 && monthsWith31Days.includes(months[prevMonth])){
        currentDate = 31;
        currentMonth--;
    }

    if (currentDay < 0) {
        currentDay = 6;
    }
    renderDay();
});

// function to render days in month
function renderCalendar() {
    // get prev month current month and next month days
    date.setDate(1);
    const firstDay = new Date(currentYear, currentMonth, 1);
    // first_day_weekday = first_day.getDay() == 0 ? 7 : first_day.getDay();
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const lastDayIndex = lastDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDay = new Date(currentYear, currentMonth, 0);
    const prevLastDayDate = prevLastDay.getDate();
    const nextDays = 7 - lastDayIndex - 1;

    // update current year and month in header
    month.innerHTML = `${months[currentMonth]} ${currentYear}`;

    // update days html
    let days = "";

    // prev days html
    for (let x = firstDay.getDay(); x > 0; x--) {
        days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
    }

    // current month days
    for (let i = 1; i <= lastDayDate; i++) {
        // check if its today then add today class
        if (
            i === new Date().getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()
        ) {
            // if date month year matches add today
            days += `<div class="day today">${i}</div>`;
        } else {
            //else dont add today
            days += `<div class="day ">${i}</div>`;
        }
    }

    // next MOnth days
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day next">${j}</div>`;
    }

    // run this function with every calendar render
    hideTodayBtn();
    daysContainer.innerHTML = days;
}
renderCalendar();

nextMonthBtn.addEventListener("click", () => {
    // increase current month by one
    currentMonth++;
    if (currentMonth > 11) {
        // if month gets greater that 11 make it 0 and increase year by one
        currentMonth = 0;
        currentYear++;
    }
    // rerender calendar
    renderCalendar();
});

// prev monyh btn
prevMonthBtn.addEventListener("click", () => {
    // increase by one
    currentMonth--;
    // check if let than 0 then make it 11 and deacrease year
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
});

// go to today
todayBtn.addEventListener("click", () => {
    // set month and year to current
    currentMonth = date.getMonth();
    currentYear = date.getFullYear();
    // rerender calendar
    renderCalendar();
});

// lets hide today btn if its already current month and vice versa

function hideTodayBtn() {
    if (
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
    ) {
        todayBtn.style.display = "none";
    } else {
        todayBtn.style.display = "flex";
    }
}