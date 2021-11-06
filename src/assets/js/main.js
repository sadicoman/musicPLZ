"use strict";


/*----- ANNIMATION CLICK MENU -----*/
var navEl = document.querySelectorAll(".nav__lien");
for (var i = 0; i < navEl.length; i++) {
    /* cette ligne permet de gérer les interactions au click*/
    navEl[i].addEventListener("click", function (e) {
        var currentLink = this.href;
        /*C'est dans cette ligne, dans les (...) qu'on ajoute la class 
        qui contient l'animation qu'on souhaite réaliser lors du changement de page*/
        document.body.classList.add("out");
        /*Cette ligne accorde le droit de changer de page une fois que l'animation est finie*/
        document.body.addEventListener("animationend", function (e) {
            window.location = currentLink;
        });
        e.preventDefault();
    });
}


/*-----BURGER MENU-----*/

let navButton = document.querySelector(".navBtn");

navButton.addEventListener("click", toggleNavigation);

function toggleNavigation() {
    if (!document.body.hasAttribute("data-menu")) {
        document.body.setAttribute("data-menu", true);
    } else {
        document.body.removeAttribute("data-menu");
    }
}


/*----- ANNIMATION CLICK Burger -----*/
let container = document.querySelector('.container');
let burgs = document.querySelectorAll('.burg');
let type = ['h', 'm', 'b'];
let clicked = false;
container.addEventListener('click', (e) => {
    if (clicked) {
        for (let i = 0; i < burgs.length; i++) {
            burgs[i].classList.remove(`burg__${type[i]}--clicked`);
            clicked = false;
        }
    } else {
        for (let i = 0; i < burgs.length; i++) {
            burgs[i].classList.add(`burg__${type[i]}--clicked`);
        }
        clicked = true;
    }
});

/*----- ANNIMATION TOURNE DISQUE -----*/
let playBtn = document.querySelector('.play');
let aiguille = document.querySelector('.aiguille');
let disc = document.querySelector('.disc');
let stopBtn = document.querySelector('.stop');
let nomMusicEls = document.querySelectorAll('.nomMusicContainer__el');
function seeNomMusicEls(){
  for(let nomMusicEl of nomMusicEls){
    if(nomMusicEl.classList.contains('nomMusicContainer__el--hidden')){
      nomMusicEl.classList.remove('nomMusicContainer__el--hidden');
    }else{
      nomMusicEl.classList.add('nomMusicContainer__el--hidden');
    }
  }
}

if (playBtn) {
  const tl1 = gsap.timeline({});
  playBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    seeNomMusicEls();
    tl1.set(aiguille,{
      transformOrigin: '26px 28px'
    });
    tl1.to(aiguille,{
      duration: 1.5,
      rotation: '30deg'
    });
    disc.classList.add('discPlay');
    mySound = new sound("../assets/sound/pentatonix-making-christmas-from-the-nightmare-before-christmas-official-video.mp3");
    mySound.play();
  });

  stopBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    seeNomMusicEls();
    tl1.to(aiguille,{
      duration: 1.5,
      rotation: '0deg'
    });
    disc.classList.remove('discPlay');
    mySound.stop();
  });  
}


/*----- ANNIMATION TOURNE DISQUE -----*/
/*-----          MOBILE          -----*/
let playBtnM = document.querySelector('.play--mobile');
let aiguilleM = document.querySelector('.aiguille--mobile');
let discM = document.querySelector('.disc--mobile');
let stopBtnM = document.querySelector('.stop--mobile');

if (playBtnM) {
  const tl1M = gsap.timeline({});
  playBtnM.addEventListener('click', (e) =>{
    mySound = new sound("../assets/sound/pentatonix-making-christmas-from-the-nightmare-before-christmas-official-video.mp3");
    mySound.play();  
    e.preventDefault();
    seeNomMusicEls();
    tl1M.set(aiguilleM,{
      transformOrigin: '12px 114px'
    });
    tl1M.to(aiguilleM,{
      duration: 1.5,
      rotation: '30deg'
    });
    discM.classList.add('discPlayM');
    
  });

  stopBtnM.addEventListener('click', (e) =>{
    e.preventDefault();
    seeNomMusicEls();
    tl1M.to(aiguilleM,{
      duration: 1.5,
      rotation: '0deg'
    });
    discM.classList.remove('discPlayM');
    mySound.stop();
  });  
}


// let sonBtn = document.querySelectorAll('.son');
// sonBtn.addEventListener('click', (e) =>{
//   e.preventDefault();
//   mySound.son(0);
// });


// let burgs = document.querySelectorAll('.burg');

/*----- ANNIMATION FOOTER -----*/
const grid = document.querySelector('.footer__music');

// taille écran
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
function setWindowSize(){
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  let n = windowWidth / 7;
    let hue = 0;
    for( let i=1; i <= n; i++){

        hue += 360 / n;
        const particule = document.createElement('div');
        particule.classList.add("music__el");
        particule.style.backgroundColor = 'hsl(' + hue + ',100%,50%)';
        let indiceLeft = i * 7 ;
        let indiceAnim = i * 15;
        particule.style.left = indiceLeft + 'px' ;
        particule.style.animationDelay = indiceAnim + 'ms';
        grid.appendChild( particule );

    }   
};


// prend la taille de l'écran lors d'un resize
window.addEventListener('resize', setWindowSize());

// remise a 0 de la grille
grid.innerHTML = "";
let n = windowWidth / 7;
let hue = 0;
for( let i=0; i <= n; i++){

    hue += 360 / n;
    const particule = document.createElement('div');
    particule.classList.add("music__el");
    particule.style.backgroundColor = 'hsl(' + hue + ',100%,50%)';
    let indiceLeft = i * 7 ;
    let indiceAnim = i * 15;
    particule.style.left = indiceLeft + 'px' ;
    particule.style.animationDelay = indiceAnim + 'ms';
    grid.appendChild( particule );

}    

/*----- FUNCTION SOUND -----*/
var mySound;
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
    this.volume = function(){
      this.sound.volume();
    }
}
// mySound = new sound("../assets/sound/voix/narrateur-1.mp3");
// mySound.play();


/*----- SLIDER MEMBRES DU GROUPES -----*/
const btnPrev = document.querySelector(".slider__btn--prev");
const btnNext = document.querySelector(".slider__btn--next");
const sliderF = document.querySelector(".slider");

if (sliderF) {
  btnNext.addEventListener("click", next);
btnPrev.addEventListener("click", prev);
}


function next(){
  let elShow = document.querySelector(".slider__el--show");
  let elNext = elShow.nextElementSibling;

  elShow.classList.remove("slider__el--show");

  if(elNext){
    elNext.classList.add("slider__el--show");
  }else{
    let elFirst = elShow.parentNode.firstElementChild;
    elFirst.classList.add("slider__el--show");
  }
}
function prev(){
  let elShow = document.querySelector(".slider__el--show");
  let elPrev = elShow.previousElementSibling;

  elShow.classList.remove("slider__el--show");

  if(elPrev){
    elPrev.classList.add("slider__el--show");
  }else{
    let elLast = elShow.parentNode.lastElementChild;
    elLast.classList.add("slider__el--show");
  }
}
// Hamer 
const slider = document.querySelector('.slider');
if (slider) {
  const hammerSlider = new Hammer(slider);
  hammerSlider.on("swipeleft", prev);
  hammerSlider.on("swiperight", next);
}











/*----- SLIDER MUSIC ALBUMS -----*/
const btnPrevMusic = document.querySelector(".sliderMusic__btn--prev");
const btnNextMusic = document.querySelector(".sliderMusic__btn--next");
const sliderMusicF = document.querySelector(".sliderMusic");

if (sliderMusicF) {
  btnNextMusic.addEventListener("click", nextMusic);
  btnPrevMusic.addEventListener("click", prevMusic);
}


function nextMusic(){
  let elShowMusic = document.querySelector(".sliderMusic__el--show");
  let elNextMusic = elShowMusic.nextElementSibling;

  elShowMusic.classList.remove("sliderMusic__el--show");

  if(elNextMusic){
    elNextMusic.classList.add("sliderMusic__el--show");
  }else{
    let elFirstMusic = elShowMusic.parentNode.firstElementChild;
    elFirstMusic.classList.add("sliderMusic__el--show");
  }
}
function prevMusic(){
  let elShowMusic = document.querySelector(".sliderMusic__el--show");
  let elPrevMusic = elShowMusic.previousElementSibling;

  elShowMusic.classList.remove("sliderMusic__el--show");

  if(elPrevMusic){
    elPrevMusic.classList.add("sliderMusic__el--show");
  }else{
    let elLastMusic = elShowMusic.parentNode.lastElementChild;
    elLastMusic.classList.add("sliderMusic__el--show");
  }
}