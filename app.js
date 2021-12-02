
const textElement = document.querySelector('.typing-effect');

const text = textElement.textContent;

// Speed controller
const delay = 200;

let i = 0;

setInterval(() => {

    textElement.innerHTML = text.substring(0, Math.abs(i));

    i += 1;

    if (i >= text.length) {
        i *= -1;
    }

}, delay)