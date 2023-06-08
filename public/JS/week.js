const week = document.querySelector(".week"),
    prevWeekBtn = document.querySelector(".prev-week-btn"),
    nextWeekBtn = document.querySelector(".next-week-btn");

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

function renderWeek() {
    week.innerHTML = `${currentDate}.${currentMonth+1} - ${currentDate+7}.${currentMonth+1} ${currentYear}`;
}

prevWeekBtn.addEventListener ("click", () => {
    currentDate++
    renderWeek();
});

nextWeekBtn.addEventListener ("click", () => {
    currentDate--;
    renderWeek();
});

renderWeek();