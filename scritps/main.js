// déclarations des variables globale
let message = document.getElementById("reponse");
let tarif;

function resultat() {
    let age = document.getElementById("age").value;
    let anneePermis = document.getElementById("anneePermis").value;
    let anneeFidelite = document.getElementById("anneeFidelite").value;
    let nbrAccident = document.getElementById("nbrAccident").value;
    // évaluation du type d'assurance avant ancienneté
    if (age >= 25) {
        if (anneePermis >= 2) {
            if (nbrAccident === 0) {
                tarif = 3;
            } else if (nbrAccident === 1) {
                tarif = 2;
            } else if (nbrAccident === 2) {
                tarif = 1;
            } else {
                tarif = 0;
            }
        } else if (nbrAccident === 0) {
            tarif = 2;
        } else {
            tarif = 0;
        }
    } else if (anneePermis < 2) {
        if (nbrAccident === 0) {
            tarif = 1;
        } else {
            tarif = 0;
        }
    } else if (nbrAccident === 0) {
        tarif = 2;
    } else {
        tarif = 0;
    }
    // réévaluation avec ancienneté
    if (tarif > 0) {
        if (anneeFidelite > 5) {
            tarif++;
        }
    }
    // affichage des tarifs
    switch (tarif) {
        case 4: message.innerHTML = '<div class="alert alert-primary" role="alert">Bleu</div>'
            break;
        case 3: message.innerHTML = '<div class="alert alert-success" role="alert">Vert</div>'
            break;
        case 2: message.innerHTML = '<div class="alert alert-warning" role="alert">Orange</div>'
            break;
        case 1: message.innerHTML = '<div class="alert alert-danger" role="alert">Rouge</div>'
            break;
        case 0: message.innerHTML = '<div class="alert alert-dark" role="alert">Refusé</div>'
            break;
        default:
    }
}


// écoute du du bouton validez
document.getElementById("bouton").addEventListener("click", resultat, false);