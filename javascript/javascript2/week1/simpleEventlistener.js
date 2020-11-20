// change the event type
document.querySelector('button').addEventListener('click', function (event) {
    // what does the event do?
    this.innerText = "Button clicked";
    console.log(event)
});