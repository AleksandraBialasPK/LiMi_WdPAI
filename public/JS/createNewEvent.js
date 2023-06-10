const createNewEvent = document.querySelector(".create-new-event"),
     form = document.getElementById('form');

form.style.display = 'none';

createNewEvent.addEventListener('click', () => {

    if (form.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'block';
    } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
    }
});