const characterAbout = document.getElementById("character--about");
const URL_QUERY = "https://rickandmortyapi.com/api/character";

function displayWiever(array) {
  const charctersFunc = array
    .map((charcter) => `<div><h1>${charcter.name}</h1><img src="${charcter.image}"/></div>`)
    .join("");
  characterAbout.innerHTML = charctersFunc;
}

fetch(URL_QUERY)
  .then((resp) => {
    return resp.json();
  })
  .then((resp2) => {
    const allCharacters = resp2.results;
    displayWiever(allCharacters);
  });
