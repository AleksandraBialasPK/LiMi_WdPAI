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

function addEvent(start, end) {
    let events = ``;
    let duration = end - start;
    for (let m=1; m<=duration; m++){
        events += `<div class="sports-event">    
                        <div class="div-for-pic">
                            <div class="picture-for-event"></div>
                        </div>
                        <div class="event-desc">
                            <div class="event-name"></div>
                            <div class="event-time"></div>
                        </div>
                   </div>`;
    }
    const event = document.querySelector(".event-container");
    event.innerHTML = events;
}
addEvent(3, 5);