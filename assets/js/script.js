let chapters = {
  debut: {
    titre: "L'éveil au moniteur silencieux",
    description:
      "Au réveil, vous vous retrouvez attaché aux fils du motineur, emprisonné dans cet univers dystopique où la machine nommée Sentinel contrôle chaque aspect de votre existence.",
    image: "./assets/image/chambre.jpg",
    boutons: [
      { titre: "Relâcher les Câbles", destination: "explorer" },
      { titre: "Se Rendormir ", destination: "rendormir" },
    ],
  },

  rendormir: {
    titre: "La Dose Fatale",
    description:
      "Les câbles du moniteur ont administré une dose qui vous a intoxiqué.",
    image: "./assets/image/dose.jpg",
    boutons: [{ titre: "Recommencer", destination: "debut" }],
  },

  explorer: {
    titre: "À la Découverte du Couloir Caché",
    description:
      "En explorant la chambre, vous découvrez un couloir où des voix mystérieuses résonnent à vos oreilles.",
    image: "./assets/image/couloir.jpg",
    boutons: [
      { titre: "Suivre le trajet ", destination: "porte" },
      { titre: "Suivre les voix étranges", destination: "mystere" },
    ],
  },

  mystere: {
    titre: "Le Piège des Voix Étranges",
    description:
      "Les voix étranges étaient en réalité des agents de sécurité, et ils vous ont assommé.",
    image: "./assets/image/securite.jpg",
    boutons: [{ titre: "Recommencer ", destination: "debut" }],
  },

  porte: {
    titre: "À la Découverte du Masque d'oxygène",
    description:
      "Vous découvrez une porte déverrouillée, à côté de laquelle se trouve un masque à oxygène.",
    image: "./assets/image/porte.jpg",
    boutons: [
      { titre: "Prendre le masque ", destination: "masque" },
      { titre: "Avancer sans prendre de masque", destination: "final" },
    ],
  },

  masque: {
    titre: "Une protection efficace",
    description:
      "Vous tenez un masque dans vos mains et apercevez la lumière du jour. Avez-vous mis votre masque?",
    image: "./assets/image/chemin.jpg",
    boutons: [{ titre: "Oui, vous avez votre masque", destination: "final" }],
  },

  chance: {
    titre: "Le Masque Oublié",
    description:
      "Vous choisissez de ne rien toucher et de ne pas prendre le masque et vous êtes à l'extérieur et contemplez la lumière du jour. Avez-vous votre masque?",
    image: "./assets/image/chemin.jpg",
    boutons: [{ titre: "Non, vous navez pas de masque", destination: "air" }],
  },

  air: {
    titre: "L'empoisonnement à l'air ",
    description:
      "Malheureusement, vous êtes empoisonné par l'air de l'extérieur et vous mort!",
    image: "./assets/image/chemin.jpg",
    boutons: [{ titre: "Non, vous navez pas de masque", destination: "debut" }],
  },

  lumiere: {
    titre: "Une autre chance à la vie?",
    description:
      "Vous avez sauvé votre peau et vous avez échappé à le Sentinel!",
    image: "./assets/image/lumiere.jpg",
    boutons: [{ titre: "Bravo", destination: "debut" }],
  },
};
//Devoir 4.1 

if (video === true){

} else {

}
//Devoir 3.1
let foundMask = false;
let titreSentinel = document.querySelector("h3");
let descriptionSentinel = document.querySelector("#texte");
let imageSentinel = document.querySelector("#image");
const boutons = document.querySelector(".boutons");
function goToChapter(chapitre) {
  if (chapitre == "debut") {
    foundMask = false;
  }
  if (chapitre == "masque") {
    foundMask = true;
  }
  if (chapitre == "final" && foundMask) {
    goToChapter("lumiere");
  } else if (chapitre == "final" && !foundMask) {
    goToChapter("air");
  }

  if (chapters[chapitre] !== undefined) {
    titreSentinel.innerText = chapters[chapitre].titre;
    descriptionSentinel.innerText = chapters[chapitre].description;
    imageSentinel.src = chapters[chapitre].image;
    while (boutons.firstChild) {
      boutons.removeChild(boutons.firstChild);
    }
    for (let i = 0; i < chapters[chapitre].boutons.length; i++) {
      const nouveauBtn = document.createElement("button");
      nouveauBtn.textContent = chapters[chapitre].boutons[i].titre;
      nouveauBtn.addEventListener("click", () => {
        goToChapter(chapters[chapitre].boutons[i].destination);
      });
      boutons.appendChild(nouveauBtn);
    }
    //Devoir 2.2
    console.log(chapters[chapitre].titre);
    console.log(chapters[chapitre].description);
    console.log("Options:");

    chapters[chapitre].boutons.forEach((info) => {
      console.log(` ➤ ${info.titre}`);
      console.log(` Tapez goToChapter("${info.destination}")`);
    });
  } else {
    console.log("Mauvaise clé de chapitre");
  }
}
goToChapter("debut");
