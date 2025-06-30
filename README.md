# 🎯 Number Guesser
Un petit jeu JavaScript interactif où le joueur doit deviner un nombre aléatoire entre 30 et 100. Le jeu se joue directement dans le navigateur via une interface simple avec un champ de saisie et des messages d’aide.


# 🚀 Fonctionnalités
✅ Génération aléatoire d’un nombre compris entre 30 et 100
✅ Saisie du nombre à deviner via un champ <input>
✅ Retour immédiat :

Indique si le nombre est trop grand ou trop petit

Indique le nombre de tentatives réussies
✅ Bouton pour relancer une nouvelle partie sans recharger la page

### local storage (JSON)
récuperer le dernier historique de tentatives de deviner

## index.jsx: chaque instruction est bien commenté et compréhensible. 

# 📂 Fichiers
index.html → Fichier HTML contenant la structure (champ texte, input, p pour les messages)

index.js → Le code du jeu

style.css → le style simple du jeu

# 🕹️ Règles du jeu
1️⃣ Le jeu génère automatiquement un nombre aléatoire entre 30 et 100 (modifiable).
2️⃣ L’utilisateur saisit un nombre dans le champ prévu et appuie sur Entrée.
3️⃣ Le jeu indique :

Too high! Try again si le nombre proposé est trop grand

Too low! Try again si le nombre proposé est trop petit

CORRECT! the answer took you X attempts si la réponse est juste

Les tentatives en numéro

4️⃣ Après une bonne réponse, un bouton New Guess permet de générer un nouveau nombre et de recommencer une partie.


# 💡 Améliorations possibles
Ajouter un compteur de parties gagnées

Limiter le nombre d’essais (mode difficile)

Ajouter des sons ou des animations

Styliser l’interface avec CSS

