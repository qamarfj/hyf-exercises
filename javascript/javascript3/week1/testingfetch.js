const fetch = require("node-fetch");
//const div1 = document.getElementById("div1");
//const div2 = document.getElementById("div2");
fetch("https://yesno.wtf/api/")
  .then((response) => {
    console.log("from 1st");
    //console.log(response);
    console.log("stringify 1st");
    console.log(JSON.stringify(response));
    //  div1.innerHTML = JSON.stringify(response);
    return response.json();
  })
  .then((data) => {
    console.log("from last");
    console.log(JSON.stringify(data));
    //div2.innerHTML = JSON.stringify(data);
    //console.log(data);
  });
