const eventsContainer = document.querySelector(".event-container");
let eventsCode = "";


function convertStringTimeToMinutes(time) {
    let [hours, minutes] = time.split(':');
    let hoursInt = parseInt(hours);
    let hoursToMinutes = hoursInt*60;
    let minutesFloat = parseFloat(minutes);
    let convertedTime = hoursToMinutes + minutesFloat;

    return convertedTime;
}

function eventDuration(startTimeStr, endTimeStr) {
    let startTimeInMinutes = convertStringTimeToMinutes(startTimeStr);
    let endTimeInMinutes = convertStringTimeToMinutes(endTimeStr);
    let eventLength = (endTimeInMinutes - startTimeInMinutes)/60;

    return eventLength.toFixed(2);
}

function adjustLength(start, end, id) {
    let length = 100 * eventDuration(start, end);
    let startTime = convertStringTimeToMinutes(start)/60;

    // const elementToChange = document.querySelector(`#${id}`);
    const elementToChange = document.querySelector(`[data-id="${id}" ]`);
    elementToChange.style.marginTop = `${startTime * 100}px`;
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