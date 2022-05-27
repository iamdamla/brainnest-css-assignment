const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("quote-btn");

const url = "https://api.quotable.io/random";

function getQuote() {
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quote.innerText = result.content;
      author.innerText = result.author;
      btn.innerText = "New Quote";
    });
}

btn.addEventListener("click", getQuote);
