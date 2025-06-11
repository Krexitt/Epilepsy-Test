

var body = document.firstElementChild.lastElementChild;
const button = document.querySelector("button");
var flash = true;










button.addEventListener('click', e => {
    button.style.opacity = 0;
    setInterval(() => {
        if (flash) {
            body.style.backgroundColor = "Blue";

        } else {
            body.style.backgroundColor = "Red";
        }
        flash = !flash;
    }, 50);
})




