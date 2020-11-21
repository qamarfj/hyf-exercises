
const div = document.getElementById('btn')
const btn = document.createElement('button');
const body = document.querySelector('body')

btn.style.width = "200px";
btn.style.height = "50px";

btn.innerText = "Change to dark mode";
div.appendChild(btn)
btn.addEventListener('click', changeColor);
function changeColor() {
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        btn.innerText = "Change to dark mode";

    }
    else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        btn.innerText = "Change to light mode";


    }
}