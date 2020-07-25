import {species} from './species.js';
import {people} from './people.js';

var divToAttachTo = document.querySelector('#people');




people.map( el => {
    var rootDiv = document.createElement("div");
    rootDiv.classList.add('card');

    var cardDisc = document.createElement('p');
    cardDisc.classList.add("card-text");
    cardDisc.innerHTML = el.name;

    rootDiv.append(cardDisc);

    divToAttachTo.appendChild(rootDiv);
})