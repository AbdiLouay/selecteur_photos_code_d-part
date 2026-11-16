'use strict';

/* DONNEES*/

let photos;     // Les éléments <li> de la liste photo-list
let total;      // L'élément <em> qui affiche le nombre de photos sélectionnées


/* FONCTIONS */

/*
    Met à jour le message avec le nombre de photos sélectionnées.
 */
function updateTotal()
{
    const selected = document.querySelectorAll('#photo-list li.selected');

    total.textContent = selected.length;
}

/**
 * Gestionnaire du clic sur une photo : sélectionne / désélectionne l'élément.
 */
function onClickPhoto()
{
    this.classList.toggle('selected');

    updateTotal();
}


/* CODE PRINCIPAL*/


photos = document.querySelectorAll('#photo-list li');
total  = document.querySelector('#total em');

for (const photo of photos) {
    photo.addEventListener('click', onClickPhoto);
}
