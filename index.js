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
console.log(document.body.appendChild(titreElement));


// 2. Créer une div avec la classe paroles
const parolesDiv = document.createElement('div');
parolesDiv.className = "paroles";
document.body.appendChild(parolesDiv);

chanson.paroles.forEach(couplet => {
    const paragraph = document.createElement('p');
    const lignes = couplet.contenu.map(ligne => {
        return ligne + "<br/>";
    }).join("");
    paragraph.innerHTML = lignes;
    parolesDiv.appendChild(paragraph);
})


// 3. Ajout de footer
const footer = document.createElement('footer');
document.body.appendChild(footer);
footer.textContent = "© Copyright 2023 - Codeloccol";

// 4.
