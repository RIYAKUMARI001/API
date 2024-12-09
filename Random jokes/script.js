document.getElementById("getJokeBtn").addEventListener("click", fetchJoke);

function fetchJoke() {
  const jokeContainer = document.getElementById("jokeContainer");
  const jokeText = document.getElementById("jokeText");

  // Clear the current joke text while fetching a new one
  jokeText.textContent = "Fetching a joke...";

  axios
    .get("https://v2.jokeapi.dev/joke/Any?safe-mode")
    .then((response) => {
      const joke = response.data;
      if (joke.type === "single") {
        // For single-line jokes
        jokeText.textContent = joke.joke;
      } else if (joke.type === "twopart") {
        // For two-part jokes
        jokeText.innerHTML = `<strong>${joke.setup}</strong><br>${joke.delivery}`;
      }
    })
    .catch((error) => {
      jokeText.textContent = "Oops! Something went wrong while fetching the joke.";
      console.error(error);
    });
}
