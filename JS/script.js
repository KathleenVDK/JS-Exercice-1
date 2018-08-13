// Exo 1
var resultat = document.getElementById('result');
var prenom = prompt("Quel est ton prénom ?");
console.log(prenom);
alert("Bonjour " + prenom);
console.log("Coucou " + prenom);

// Exo 2
var bordure = document.getElementById('red');
bordure.style.border = "1px solid red";
var bordure = document.getElementById('green');
bordure.style.border = "1px solid green";
var bordure = document.getElementById('blue');
bordure.style.border = "1px solid blue";

// Exo 3
var pseudo = prompt("Quel est ton pseudo ?");
var mdp = prompt("Mot de passe");
if (pseudo == mdp) {
  alert("Connexion réussie !");
 }
else {
  alert("Erreur, veuillez recommencer");
 }

// Exo 4
var nombre = prompt("Choisissez un nombre entre 1 et 4 ?");
switch (nombre) {
  case '1':
    resultat.innerHTML = "🐱";
    break;
  case '2':
    resultat.innerHTML = "🐷";
    break;
  case '3':
    resultat.innerHTML = "🐼";
    break;
  case '4':
    resultat.innerHTML = "🐶";
    break;

  default:
    resultat.innerHTML = "💥";
  }
