const createNewEvent = document.querySelector(".create-new-event"),
     form = document.getElementById('form'),
    outsideOfForm = document.querySelector("main");

let events = ``;

form.style.display = 'none';

createNewEvent.addEventListener('click', () => {

    if (form.style.display === 'none') {
        form.style.display = 'block';
        outsideOfForm.addEventListener('click', () => {
                form.style.display = 'none';
        });
    } else {
        form.style.display = 'none';
    }
});

function adjustLength(start, end) {
    let length = 100 * (end - start);

    const elementToChange = document.querySelector(".event-tile");
    elementToChange.style.height = `${length}px`;
}

function timeToFloat(time) {

}

function addEvent(title, category, start, end) {
    let eventTitle = title;
    let eventTime = `${start} - ${end}`;
    let padding = start * 100;
    events += `<div class="event-tile event-tile-${category}">    
                 <div class="side-color side-color-${category}">
                    <div class="picture-for-event"></div>
                 </div>
                 <div class="event-desc">
                    <div class="event-name">${eventTitle}</div>
                    <div class="event-time">${eventTime}</div>
                 </div>
               </div>`;

    const event = document.querySelector(".event-container");
    event.innerHTML = events;
    event.style.paddingTop = `${padding}px`;

    adjustLength(start, end);
}

addEvent("A", "social", 2, 5);
addEvent("B", "sports", 6, 7);
// addEventListener("submit", (event) => {
//     let title = document.getElementById("event-title-form").value;
//     let category = document.getElementById("category-form").value;
//     addEvent(title, category);
// });
