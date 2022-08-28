
const apiKey = "9fc86d831bc34623a7d580da7ea7e145";

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";

let urlCombi = url + apiKey;

const resultBox = document.querySelector(".resultBox");


async function getResult() {

    try {

        const response = await fetch(urlCombi);

        const results = await response.json();


        resultBox.innerHTML = "";

        for(let i = 0; i < 8; i++) {
            resultBox.innerHTML += `<div class="result"><p>name: ${results.results[i].name}</p></div>`;
            resultBox.innerHTML += `<div class="result"><p>rating: ${results.results[i].rating}</p></div>`;
            resultBox.innerHTML += `<div class="result"><p>number of tags: ${results.results[i].tags.length}</p></div>`;
            resultBox.innerHTML += `<br>`;

        }


    } catch (err) {

        resultBox.innerHTML = "<p>There was an error, oh no!</p>" + err;

    }

}

getResult();
