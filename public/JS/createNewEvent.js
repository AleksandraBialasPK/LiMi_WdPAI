const createNewEvent = document.querySelector(".create-new-event"),
     form = document.getElementById('form'),
    outsideOfForm = document.querySelector("main");

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

function addEvent(start, end, title) {
    let events = ``;
    let duration = end - start;
    let length = 100 * duration;
    let eventTitle = title;
    let eventTime = `${start} - ${end}`;
    let padding = 300;

    let eventLength = `<div class="sports-event">    
                 <div class="side-color">
                    <div class="picture-for-event"></div>
                 </div>
                 <div class="event-desc">
                    <div class="event-name">${eventTitle}</div>
                    <div class="event-time">${eventTime}</div>
                 </div>
               </div>`;

    const event = document.querySelector(".event-container");
    event.innerHTML = eventLength;
    event.style.paddingTop = `${padding}px`;

    const elementToChange = document.querySelector(".sports-event");
    elementToChange.style.height = `${length}px`;
}
addEvent(2, 5, "Meeting with Aleks");