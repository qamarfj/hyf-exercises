const astronautsNo = document.getElementById("astronauts-no");
const astronautsList = document.getElementById("astronauts");

fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((astronsData) => {
    console.log(astronsData.people[0].name);
    // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
    astronautsNo.innerHTML = astronsData.number;
    astronsData.people.forEach((person) => {
      const newLi = document.createElement("li");
      newLi.innerHTML = person.name;
      astronautsList.appendChild(newLi);
    });
  });
