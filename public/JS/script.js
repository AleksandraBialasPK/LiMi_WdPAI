const daysContainer = document.querySelector(".days"),
    nextMonthBtn = document.querySelector(".next-month-btn"),
    prevMonthBtn = document.querySelector(".prev-month-btn"),
    month = document.querySelector(".month"),
    day = document.querySelector(".day"),
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

// get current date
const date = new Date();

let currentDay = date.getDay();

let currentDate = date.getDate();
// get current month
let currentMonth = date.getMonth();

// get current year
let currentYear = date.getFullYear();

function renderDay() {
    day.innerHTML = `${days[currentDay]} ${currentDate} ${months[currentMonth]} ${currentYear}`;
}

// function to render days
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

renderDay();
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