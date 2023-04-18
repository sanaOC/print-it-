// On commence par définir le tableau des slides, qui contient pour chaque slide un objet avec deux propriétés : "image" et "tagLine"
const slides = [
	{
	  "image":"slide1.jpg",
	  "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image":"slide2.jpg",
	  "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image":"slide3.jpg",
	  "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image":"slide4.png",
	  "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  
// Sélection des éléments HTML nécessaires
const leftArrow = document.querySelector('.arrow_left'); // flèche gauche
const rightArrow = document.querySelector('.arrow_right'); // flèche droite
const bannerImg = document.querySelector('.banner-img'); // image du slider
const bannerText = document.querySelector('#banner p'); // texte associé à l'image du slider
const dotsContainer = document.querySelector('.dots'); // conteneur pour les points de navigation

let currentSlide = 0; // variable pour stocker l'index de l'image actuelle

// Création des points de navigation
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('div'); // création d'un élément div pour chaque point
  dot.classList.add('dot'); // ajout de la classe "dot" pour chaque point
  if (i === 0) { // si le point est le premier, il est sélectionné par défaut
    dot.classList.add('dot_selected');
  }
  dotsContainer.appendChild(dot); // ajout du point à la fin du conteneur
}

const dots = document.querySelectorAll('.dot'); // sélection de tous les points créés

// Fonction pour mettre à jour l'affichage du slider
function updateSlider() {
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`; // mise à jour de l'image du slider avec l'image correspondant à l'index actuel
  bannerText.innerHTML = slides[currentSlide].tagLine; // mise à jour du texte avec le texte correspondant à l'index actuel
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('dot_selected'); // suppression de la classe "dot_selected" pour tous les points
  }
  dots[currentSlide].classList.add('dot_selected'); // ajout de la classe "dot_selected" pour le point correspondant à l'index actuel
}

// Événement pour passer à l'image suivante
rightArrow.addEventListener('click', function() {
  currentSlide++; // on incrémente l'index actuel
  if (currentSlide >= slides.length) { // si on arrive à la fin du tableau d'images
    currentSlide = 0; // on revient au début
  }
  updateSlider(); // on met à jour l'affichage du slider
});

// Événement pour passer à l'image précédente
leftArrow.addEventListener('click', function() {
  currentSlide--; // on décrémente l'index actuel
  if (currentSlide < 0) { // si on arrive au début du tableau d'images
    currentSlide = slides.length - 1; // on va à la dernière image
  }
  updateSlider(); // on met à jour l'affichage du slider
});

// Ajouter un évènement à la flèche gauche
leftArrow.addEventListener('click', function() {
  console.log("Clic sur la flèche gauche");
});

// Ajouter un évènement à la flèche droite
rightArrow.addEventListener('click', function() {
  console.log("Clic sur la flèche droite");
});

// Ajouter un évènement à la flèche gauche
leftArrow.addEventListener('click', function() {
  console.log("Clic sur la flèche gauche");
});
// Ajouter un évènement à la flèche droite
rightArrow.addEventListener('click', function() {
  console.log("Clic sur la flèche droite");
});

