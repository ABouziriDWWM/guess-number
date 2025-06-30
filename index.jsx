const minNum = 30;
const maxNum = 100;
/* Generer un nombre entre min et max
 La methode  floor rend math random (qui est entre 0 et 1) entier */
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

const texte = document.getElementById("texte");
const recommencerBtn = document.createElement("button");
const inputGuess = document.getElementById("input");

recommencerBtn.textContent = "New Guess";
recommencerBtn.style.marginLeft = "5vh";

let attempts = 0;
var guess;
let previousAnswers = [];

texte.textContent =
  "Type a number between " + minNum + " and " + maxNum + ", and press enter";

// récuperer la valeur de l'input avec le boutton "entrer"
inputGuess.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.body.appendChild(recommencerBtn);
    guess = Number(this.value);
    // afficher le nombre choisi
    document.getElementById("output").textContent = "you entered: " + guess;
    // console.log("voila " + guess);
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
    // guess est correct, on compte les tentatives
    else {
      attempts++;
      previousAnswers.unshift("attempt " + attempts + ":  " + guess + "\n");
      let attemptNumber = document.createElement("p");
      // afficher le tableau en texte dans la balise p de id = "answers"
      document
        .getElementById("answers")
        .appendChild(attemptNumber).textContent = previousAnswers[0];
      //console.log(previousAnswers);

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
        // les tentatives doit etre remise a zéro
        attempts = 0;
        // enregistrer les tentatives y compris la réponse si le joueur à gagner
        localStorage.setItem(
          "previousAnswers",
          JSON.stringify(previousAnswers)
        );
        previousAnswers = [];
      }
    }
    //pour que ca rafréchit la valeur answer
    inputGuess.value = "";
  }
  // pour déclancher un nouveau jeu
  recommencerBtn.onclick = function () {
    // dernier historique de tentatives
    const storedArrayString = localStorage.getItem("previousAnswers");

    // Convertion en tableau pour l'afficher
    const storedArray = storedArrayString ? JSON.parse(storedArrayString) : [];
    console.log("historique: \n" + storedArray);

    // une nouvelle réponse
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    texte.textContent = "New Game !";

    // ca aide à trouver la réponse
    console.log(answer);

    // les tentatives seront remise a zéro
    attempts = 0;
    //vider le texte output
    document.getElementById("output").textContent = "";
    //enlever tout les fils de p de id= "answers"
    document.getElementById("answers").innerHTML = "";
  };
});
