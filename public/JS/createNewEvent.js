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

function chooseCategory(category) {
    const categoryContainer = document.querySelector(".event-tile");
    const categorySideColor = document.querySelector(".side-color");
    switch (category) {
        case 'sports':
            categoryContainer.style.backgroundColor = "rgba(255, 153, 183, 0.3)";
            categorySideColor.style.backgroundColor = "#FF99B7";
            break;
        case 'work/school':
            categoryContainer.style.backgroundColor = "rgba(174, 195, 255, 0.3)";
            categorySideColor.style.backgroundColor = "#AEC3FF";
            break;
        case 'home':
            categoryContainer.style.backgroundColor = "rgba(198, 185, 223, 0.3)";
            categorySideColor.style.backgroundColor = "#C6B9DF";
            break;
        case 'social':
            categoryContainer.style.backgroundColor = "rgba(130, 205, 71, 0.3)";
            categorySideColor.style.backgroundColor = "#82CD47";
            break;
        case 'other':
            categoryContainer.style.backgroundColor = "rgba(255, 234, 32, 0.3)";
            categorySideColor.style.backgroundColor = "#FFEA20";
            break;
    }
}

function adjustLength(start, end) {
    let length = 100 * (end - start);

    const elementToChange = document.querySelector(".event-tile");
    elementToChange.style.height = `${length}px`;
}

function timeToFloat(time) {

}

function addEvent(title, category) {
    let eventTitle = title;
    let start = 2;
    let end = 5;
    let eventTime = `${start} - ${end}`;
    let padding = start * 100;

    events += `<div class="event-tile">    
                 <div class="side-color">
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
    chooseCategory(category);
}

addEventListener("submit", (event) => {
    let title = document.getElementById("event-title-form").value;
    let category = document.getElementById("category-form").value;
    addEvent(title, category);
});
