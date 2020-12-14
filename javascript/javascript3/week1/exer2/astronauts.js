const ul = document.getElementById("ul");
fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.people);
    data.people.forEach((asron) => {
      const li = document.createElement("li");
      li.innerHTML = asron.name;
      ul.appendChild(li);
    });
  });
