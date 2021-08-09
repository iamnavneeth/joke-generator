const jokes = document.querySelector(".container");
const generate = document.querySelector("#joke");

let url = "https://api.chucknorris.io/jokes/random";
const funnyJokes = () => {
  generate.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        jokes.innerHTML += data.value;
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

funnyJokes();
