// console.log(chanson);
// Structure de Chanson:
// - auteur: string
// - titre: string
// - paroles : [Couplet, Couplet, ...]

// Structure de Couplet:
// id : string
// type : string
// chanteur : string
// contenu: tableau contenant les lignes du couplet

// 1. Ajout de titre à la page
const titreElement = document.createElement('h1');
const auteurElement = document.createElement('small');
auteurElement.textContent = chanson.auteur + " -";
const titreChansonElement = document.createTextNode(chanson.titre);
titreElement.appendChild(auteurElement);
titreElement.appendChild(titreChansonElement);
document.body.appendChild(titreElement);


// 2. Créer une div avec la classe paroles
const parolesDiv = document.createElement('div');
parolesDiv.className = "paroles";
document.body.appendChild(parolesDiv);

chanson.paroles.forEach(element => {
    const paragraph = document.createElement('p');
    paragraph.classList = 'refrain';
    const span = document.createElement('span');
    span.classList = 'contenu';
    const hidden = document.createElement('span');
    
        if (element.type === 'choeur') {
            hidden.classList = 'choeur hidden';
            hidden.innerHTML = "[Choeur]<br>";
        } else {
            hidden.classList = element.type;
        }
    
    const lignes = element.contenu.map(ligne => ligne + "<br>").join("");
    parolesDiv.appendChild(paragraph);
    paragraph.append(span);
    paragraph.prepend(hidden);
    span.innerHTML = lignes;

});


// 3. Ajout de footer
const footer = document.createElement('footer');
document.body.appendChild(footer);
footer.textContent = "© Copyright 2023 - Codeloccol";

// 4.
const button1 = document.createElement('input');
const button2 = document.createElement('input');

const label1 = document.createElement('label');
const label2 = document.createElement('label');
const hrr = document.createElement('hr');
document.body.insertBefore(hrr, parolesDiv);

label1.innerText = "Masquer les Paroles";
label2.innerText = "Masquer les Choeurs";

label1.prepend(button1);
label2.prepend(button2);

button1.setAttribute('type', 'checkbox');
button2.setAttribute('type', 'checkbox');
button1.setAttribute('id', 'masquer-paroles');
button2.setAttribute('id', 'masquer-refrains');
button1.setAttribute('name', 'refrain');
button2.setAttribute('name', 'refrain');

document.body.prepend(label1);
document.body.prepend(label2);



// Récupere la case "masquer les paroles"
const checkboxParoles = document.getElementById('masquer-paroles');
const divParoles = document.getElementById('paroles');
const labelParoles = checkboxParoles.nextSibling;
const hr = document.querySelector('hr');

button1.addEventListener('click', function() {
  if (checkboxParoles.checked) {
    parolesDiv.style.display = 'none';
    labelParoles.textContent = 'Afficher les paroles';
    hr.style.display = 'none';
  } else {
    parolesDiv.style.display = 'block';
    labelParoles.textContent = 'Masquer les paroles';
    hr.style.display = 'block';
  }
});


// Remplacez tous les refrains sauf le premier par [Refrain]
const checkboxRefrains = document.getElementById('masquer-refrains');
const refrains = document.querySelectorAll('.refrain');
const labelRefrains = checkboxRefrains.nextSibling;
const definition = document.querySelectorAll('.choeur');
const contenu = document.querySelectorAll('.contenu');

button2.addEventListener('click', function(event) {
  for (let i = 1; i < refrains.length; i++) {
    if (event.target.checked) {
      contenu[i].classList.add('hidden');
      definition[i].classList.remove('hidden');
      labelRefrains.textContent = 'Masquer les Choeurs';

      definition[i].addEventListener('mouseenter', () => {
          contenu[i].classList.remove('hidden');
          });
      definition[i].addEventListener('mouseleave', () => {
        contenu[i].classList.add('hidden');
        });
    } else {
      contenu[i].classList.remove('hidden');
      definition[i].classList.add('hidden');
      labelRefrains.textContent = 'Afficher les Choeurs';
    }
    
  }
})

 const paragraph = document.querySelectorAll('p');
 console.log(paragraph);
 paragraph.forEach(element => {
   element.setAttribute('style', 'margin: 0px');
 });


