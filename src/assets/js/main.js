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

const tl1 = gsap.timeline({});
playBtn.addEventListener('click', (e) =>{
  e.preventDefault();
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
  tl1.to(aiguille,{
    duration: 1.5,
    rotation: '0deg'
  });
  disc.classList.remove('discPlay');
  mySound.stop();
});

/*----- ANNIMATION TOURNE DISQUE -----*/
/*-----          MOBILE          -----*/
let playBtnM = document.querySelector('.play--mobile');
let aiguilleM = document.querySelector('.aiguille--mobile');
let discM = document.querySelector('.disc--mobile');
let stopBtnM = document.querySelector('.stop--mobile');

const tl1M = gsap.timeline({});
playBtnM.addEventListener('click', (e) =>{
  mySound = new sound("../assets/sound/pentatonix-making-christmas-from-the-nightmare-before-christmas-official-video.mp3");
  mySound.play();  
  e.preventDefault();
  
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
  tl1M.to(aiguilleM,{
    duration: 1.5,
    rotation: '0deg'
  });
  discM.classList.remove('discPlayM');
  mySound.stop();
});

// let sonBtn = document.querySelectorAll('.son');
// sonBtn.addEventListener('click', (e) =>{
//   e.preventDefault();
//   mySound.son(0);
// });




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



//------------------------
// je suis allé manger :)
//------------------------



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