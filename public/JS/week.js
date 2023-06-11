const week = document.querySelector(".week"),
    prevWeekBtn = document.querySelector(".prev-week-btn"),
    nextWeekBtn = document.querySelector(".next-week-btn"),
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

function generateTimeline() {
    let hours = "";

    for (let i = 1; i <= 23; i++) {
        hours += `<div class="hour">${i}:00</div>`;
    }
    timelineContainer.innerHTML = hours;
}

generateTimeline();

function generateDays() {
    let days = "";

    days += `<div class="day-grid-tile" id="first-day-tile"></div>`;
    for (let i = 0; i <= 21; i++) {
        days += `<div class="day-grid-tile"></div>`;
    }
    days += `<div class="day-grid-tile" id="last-day-tile"></div>`;
    daysContainer.innerHTML = days;

}

generateDays();