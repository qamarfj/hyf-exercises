//const newImg = document.createElement("img");
/*function showImg() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((dogData) => {
      console.log(dogData);

      newImg.src = dogData.message;
      document.body.appendChild(newImg);
    });
}
// 1. Get a random dog image and display it in the browser
//showImg();
//2. Get a new image every 2 sec.
//setInterval(showImg, 2000);

//3: Get the list of all breeds from https://dog.ceo/api/breeds/list/all
//showAllbreeds();
function showAllbreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((dogBreedsData) => {
      const ul = document.createElement("ul");
      for (let key in dogBreedsData.message) {
        const newLi = document.createElement("li");
        newLi.innerHTML = key;
        ul.appendChild(newLi);
      }
      document.body.appendChild(ul);
    });
}*/
//4.Display a random image of a breed from the list https://dog.ceo/api/breed/[BREEDNAME]/images/random
function showbreedImg() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((dogBreedsData) => {
      const ul = document.createElement("ul");

      for (let key in dogBreedsData.message) {
        /*const newLi = document.createElement("li");
        newLi.innerHTML = key;
        ul.appendChild(newLi);*/
        let url = `https://dog.ceo/api/breed/${key}/images/random`;
        //console.log(url);
        fetch(url)
          .then((response) => response.json())
          .then((dogData) => {
            const newImg = document.createElement("img");
            //console.log(dogData);
            // newImg.innerHTML = "helo";
            newImg.src = dogData.message;
            document.body.appendChild(newImg);
            //    Display the name of the breed under the image

            const p = document.createElement("p");
            p.innerHTML = key;
            document.body.appendChild(p);
          });
      }
      //document.body.appendChild(ul);
    });
}
showbreedImg();
