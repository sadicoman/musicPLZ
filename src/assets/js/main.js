"use strict";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);


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
});

stopBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  tl1.to(aiguille,{
    duration: 1.5,
    rotation: '0deg'
  });
  disc.classList.remove('discPlay');
});
