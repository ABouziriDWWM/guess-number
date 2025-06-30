const minNum = 30;
const maxNum = 100;
/* Generer un nombre entre min et max
 La methode  floor rend math random (qui est entre 0 et 1) entier */
var answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const texte = document.getElementById("texte");
const recommencerBtn = document.createElement("button");
const input = document.getElementById("input");

recommencerBtn.textContent = "New Guess";
recommencerBtn.style.marginLeft = "5vh";

recommencerBtn.onclick = function (answer) {
  answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  texte.textContent = "New Game !";
  console.log(answer);
};

let attempts = 0;
var guess;

texte.textContent =
  "Type a number between " + minNum + " and " + maxNum + ", and press enter";

// récuperer la valeur de l'input avec le boutton "entrer"
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.body.appendChild(recommencerBtn);
    guess = Number(this.value);
    // afficher le nombre choisi
    document.getElementById("output").textContent = "you entered: " + guess;
    console.log("voila " + guess);
    console.log("reponse " + answer);
    //  si guess n'est pas un nombre, voir input index.html
    //   if (isNaN(guess)) {
    //     texte.textContent = "Please enter a number";
    //     running = false;
    //   }

    // si guess est unn nombre mais non borné
    if (guess > maxNum || guess < minNum) {
      texte.textContent =
        "Please enter a number between " + minNum + " and " + maxNum;
    }
    // guess est correct,on compte les tentatives
    else {
      attempts++;
      // guess plus grand que la réponse
      if (guess > answer) {
        texte.textContent = "Too high! Try again";
      }
      // guess plus grand que la réponse
      else if (guess < answer) {
        texte.textContent = "Too low! Try again";
      }
      // la réponse est correct
      else {
        texte.textContent =
          "CORRECT! the answer took you " + attempts + " attempts";
        attempts = 0;
      }
    }
  }
});
