
const div = document.getElementById('btn')
const btn = document.createElement('button');


btn.style.width = "200px";
btn.style.height = "50px";

btn.innerText = "Change to dark mode";
div.appendChild(btn)
btn.addEventListener('click', changeColor);
function changeColor() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        btn.innerText = "Change to dark mode";
        const hed = document.getElementById("hed");
        hed.innerText = "This page text is  changed by  its mode by javascript";
        hed.style.color = "red";
    }
    else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        btn.innerText = "Change to light mode";


    }
}