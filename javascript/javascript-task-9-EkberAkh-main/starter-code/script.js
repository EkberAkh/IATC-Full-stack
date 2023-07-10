const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("keyword");
const sound = document.getElementById("audio");
const button = document.getElementById("button");
const error = document.getElementById("error");
const definitions = document.getElementById("definitions");
const toggleBtn = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("toggle-dark");

  if (toggleBtn.classList.toggle("bright")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "1s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "1s";
  }
});

button.addEventListener("click", () => {
  let inputWord = document.getElementById("inputWord").value;
  fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      result.innerHTML = `
            <div class="keyword-info">
            <h1 class="head-1">${inputWord}</h1>
            <p>${data[0].phonetic || ""}</p>
            
          </div>
          <div class="keyword-audio" id="audio">
            
            <button type="button">
              <img src="assets/images/icon-play.svg" alt="" />
            </button>
          
          </div>
          `;

      definitions.innerHTML = `
       <h2 class="definition_type head-2">${data[0].meanings[0].partOfSpeech}</h2>
       <h3 class="definition_meaning">Meaning</h3>
       <ul class="definition-meaning-list">
         <li>${data[0].meanings[0].definitions[0].definition}</li>
       </ul>
       <div class="synonyms d-flex">
         <h3 class="definition-synonym head-3">Synonyms</h3>
         <a class="synonym-word" href="#">${data[0].meanings[0].synonyms}</a>
       </div>
    

    <hr />
    <h4 class="definition-source head-4">Source</h4>

    <ul class="source-list">
      <li><a href="#">${data[0].sourceUrls[0]}</a></li>
    </ul>
       `;
    })
    .catch(() => {
      result.innerHTML = `
        <div id="error" class="error d-flex">
        <div class="error-emoji"><span>😔</span></div>
        <h2 class="error-title">No Definitions Found</h2>
        <p class="error-message">
          Sorry, we couldn't find definitions for the word you were
          looking for.
        </p>
      </div>
        `;
      definitions.innerHTML = "";
    });

  // sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`)
  // console.log(sound)
});
