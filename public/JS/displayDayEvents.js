const eventsContainer = document.querySelector(".event-container");
let eventsCode = "";

function adjustLength(start, end, id) {
    let length = 100 * (end - start);

    // const elementToChange = document.querySelector(`#${id}`);
    const elementToChange = document.querySelector(`[data-id="${id}" ]`);
    elementToChange.style.padding = `${start * 100}px`;
    elementToChange.style.height = `${length}px`;
}

function getEventsForDay(dayParam="") {
    let day = dayParam;
    if(day === "") {
        day = new Date();
        day = `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`;
    }

    const data = {"day" :day};
    console.log(data);
    fetch("/getEventsForDay", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).then(function (response) {
        // console.log(response.json());
        return response.json();
    }).then(function (events) {
        eventsContainer.innerHTML = "";
        placeEvents(events);
    });
}

function placeEvents(events) {
    events.forEach(event => {
        addEvent(event);
    });

    const eventsContainer = document.querySelector(".event-container");
    eventsContainer.innerHTML = eventsCode;

    events.forEach(event=> {
        adjustLength(event.startTime, event.endTime, event.eventID);
    });
}

function addEvent(event){
    // eventsCode += `<div class="event-tile event-tile-${event.category}" id="${event.eventID}">
    eventsCode += `<div class="event-tile event-tile-${event.category}" data-id="${event.eventID}">    
                 <div class="side-color side-color-${event.category}">
                    <div class="picture-for-event"></div>
                 </div>
                 <div class="event-desc">
                    <div class="event-name">${event.title}</div>
                    <div class="event-time">${event.startTime} - ${event.endTime}</div>
                 </div>
               </div>`;

}


const form = document.getElementById('form');
form.style.display = 'none';
getEventsForDay();