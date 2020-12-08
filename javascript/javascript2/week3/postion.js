/*const posX = [];
const posY = [];

function recordPostion(event) {
  posX.push(event.clientX);
  posY.push(event.clientY);
  document.removeEventListener("mousemove", recordPostion);
}
//record postion after every scond
let intaravl1 = setInterval(() => {
  document.addEventListener("mousemove", recordPostion);
  console.log("3 sec pass");
}, 1000);
//stop recoding postion afet 30second
let timout = setTimeout(function () {
  clearInterval(intaravl1);
  clearTimeout(timout);
  console.log(posX.reduce((a, b) => a + b) / posX.length);
  console.log(posY.reduce((a, b) => a + b) / posY.length);
  console.log("30  seconds has elapsed!");
}, 30000);

////
const pos1X = [];
const pos1Y = [];

function recordPostion1(event) {
  pos1X.push(event.clientX);
  pos1Y.push(event.clientY);
  //document.removeEventListener("mousemove", recordPostion);
}
//record postion after every scond
//let intaravl1 = setInterval(() => {
document.addEventListener("mousemove", recordPostion1);
//console.log("3 sec pass");
//}, 1000);
//stop recoding postion afet 30second
const timout1 = setTimeout(function () {
  //clearInterval(intaravl1);
  clearTimeout(timout1);
  console.log(pos1X.reduce((a, b) => a + b) / pos1X.length);
  console.log(pos1Y.reduce((a, b) => a + b) / pos1Y.length);
  console.log("30  seconds has elapsed!");
}, 30000);
*/
//better way to do this all
const mousePostions = [];
const hasMouseMoved = (Event) => {
  const mousePostion = { x: Event.clientX, y: Event.clientY };
  mousePostions.push(mousePostion);
};
const calculatAverageNumber = (numbers) => {
  const averageNumber = numbers.reduce((a, b) => a + b) / numbers.length;
  return averageNumber;
};
document.addEventListener("mousemove", hasMouseMoved);
setTimeout(() => {
  console.log("average postion of mouse coordinate after 30 second: ");
  console.log(
    calculatAverageNumber(mousePostions.map((posostion) => posostion.x)),
    calculatAverageNumber(mousePostions.map((posostion) => posostion.y))
  );
}, 30000);
