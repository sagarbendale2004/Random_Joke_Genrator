var mainBox  = document.getElementById("box");
var btn  = document.getElementById("btn");
var para = document.getElementById("para");

const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let genrateJoke = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        para.textContent = `${data.joke}`;
    })
}

btn.addEventListener("click", genrateJoke);
genrateJoke();