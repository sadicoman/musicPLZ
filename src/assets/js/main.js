"use strict";

var navEl = document.querySelectorAll(".nav__lien");
for(var i=0; i < navEl.length; i++){
    /* cette ligne permet de gérer les interactions au click*/
    navEl[i].addEventListener("click", function(e){
        var currentLink = this.href;
        /*C'est dans cette ligne, dans les (...) qu'on ajoute la class 
        qui contient l'animation qu'on souhaite réaliser lors du changement de page*/
        document.body.classList.add("out");
        /*Cette ligne accorde le droit de changer de page une fois que l'animation est finie*/
        document.body.addEventListener("animationend", function(e){
            window.location = currentLink;
        });
        e.preventDefault();
    });
}