import {species} from './species.js';
import {people} from './people.js';

var peoplediv = document.querySelector('#people');



people.map( el => {
    var rootDiv = document.createElement("div");
    rootDiv.classList.add('characters-column');

    var cardDisc = document.createElement('p');
    cardDisc.classList.add("column-text");
    cardDisc.innerHTML = el.name;

    rootDiv.append(cardDisc);

    peoplediv.appendChild(rootDiv);
})

var speciesdiv = document.querySelector('#species');

species.map( el => {
    var rootDiv = document.createElement("div");
    rootDiv.classList.add('species-column');

    var cardDisc = document.createElement('p');
    cardDisc.classList.add("column-text");
    cardDisc.innerHTML = el.name;

    rootDiv.append(cardDisc);

    speciesdiv.appendChild(rootDiv);
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("swscroll").style.width = "0%";
  } else {
    document.getElementById("swscroll").style.width = "80%";
  }
}