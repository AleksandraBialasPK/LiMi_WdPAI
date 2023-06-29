const form = document.querySelector("form");
const emailInput = form.querySelector('input[name="email"]');
const confirmedPasswordInput = form.querySelector('input[name="confirmedPassword"]');

function isEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function arePasswordsSame(password, confirmedPassword) {
    return password === confirmedPassword;
}

function markValidation(element, condition) {
    !condition ? element.classList.add('not-valid') : element.classList.remove('not-valid');
}

emailInput.addEventListener('keyup', function () {
    setTimeout(
        function() {markValidation(emailInput, isEmail(emailInput.value));},
        1000);
})

confirmedPasswordInput.addEventListener('keyup', function () {
    setTimeout(
        function() {
            const condition = arePasswordsSame(
                confirmedPasswordInput.previousElementSibling.value,
                confirmedPasswordInput.value);
            markValidation(confirmedPasswordInput, condition)
        },
        1000);
});