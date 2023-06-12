const week = document.querySelector(".week"),
    prevWeekBtn = document.querySelector(".prev-week-btn"),
    nextWeekBtn = document.querySelector(".next-week-btn"),
    daysForTheWeekContainerMonday = document.querySelector(".monday-grid-tiles"),
    daysForTheWeekContainerTuesday = document.querySelector(".tuesday-grid-tiles"),
    daysForTheWeekContainerWednesday = document.querySelector(".wednesday-grid-tiles"),
    daysForTheWeekContainerThursday =  document.querySelector(".thursday-grid-tiles"),
    daysForTheWeekContainerFriday =  document.querySelector(".friday-grid-tiles"),
    daysForTheWeekContainerSaturday =  document.querySelector(".saturday-grid-tiles"),
    daysForTheWeekContainerSunday =  document.querySelector(".sunday-grid-tiles"),
    timelineContainer = document.querySelector(".timeline");


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

let currentDate = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

let firstDay = currentDate - date.getDay(); // First day is the day of the month - the day of the week
var lastDay = firstDay + 6; // last day is the first day + 6


function renderWeek() {
    week.innerHTML = `${firstDay}.${currentMonth}.${currentYear} - ${lastDay}.${currentMonth}.${currentYear}`;
}

renderWeek();

function nextWeek(date, weeks) {
}

prevWeekBtn.addEventListener ("click", () => {
    renderWeek();
});

nextWeekBtn.addEventListener ("click", () => {
    nextWeek(currentDate, 1);
    renderWeek();
});

function generateTimeline() {
    let hours = "";

    for (let i = 1; i <= 23; i++) {
        hours += `<div class="hour">${i}:00</div>`;
    }
    timelineContainer.innerHTML = hours;
}

generateTimeline();

function generateDaysForWeek() {
    let days = "";

    for (let i = 0; i <= 22; i++) {
        days += `<div class="week-grid-tile"></div>`;
    }
    days += `<div class="week-grid-tile last-tile"></div>`;

    daysForTheWeekContainerMonday.innerHTML = days;
    daysForTheWeekContainerTuesday.innerHTML = days;
    daysForTheWeekContainerWednesday.innerHTML = days;
    daysForTheWeekContainerThursday.innerHTML = days;
    daysForTheWeekContainerFriday.innerHTML = days;
    daysForTheWeekContainerSaturday.innerHTML = days;
    daysForTheWeekContainerSunday.innerHTML = days;

}

generateDaysForWeek();