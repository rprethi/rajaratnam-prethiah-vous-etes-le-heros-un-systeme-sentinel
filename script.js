let chapters = {
    debut: {
        titre: "L'éveil au moniteur silencieux",
        description: "Au réveil, vous vous retrouvez attaché aux fils du motineur, emprisonné dans cet univers dystopique où la machine nommée Sentinel contrôle chaque aspect de votre existence.",
        image: "chambre.jpg",
        boutons: [{ titre: 'Relâcher les Câbles', destination: 'couloir' }, { titre: "Se Rendormir ", destination: "intoxication" }]
    },

    intoxication: {
        titre: "La Dose Fatale",
        description: "Les câbles du moniteur ont administré une dose qui vous a intoxiqué.",
        image: "chambre.jpg",
        boutons: [{ titre: 'Recommencer', destination: 'debut' }]
    },

    couloir: {
        titre: "À la Découverte du Couloir Caché",
        description: "En explorant la chambre, vous découvrez un couloir où des voix mystérieuses résonnent à vos oreilles.",
        image: "couloir.jpg",
        boutons: [{ titre: "Suivre le trajet ", destination: "porte" }, { titre: "Suivre les voix étranges", destination: "securite" }]
    },

    securite: {
        titre: "Le Piège des Voix Étranges",
        description: "Les voix étranges étaient en réalité la sécurité, et elles vous ont assommé.",
        image: "couloir.jpg",
        boutons: [{ titre: "Recommencer ", destination: "debut" }]
    },

    porte: {
        titre: "À la Découverte du Masque d'oxygène",
        description: "Vous découvrez une porte déverrouillée, à côté de laquelle se trouve un masque à oxygène.",
        image: "porte.jpg",
        boutons: [{ titre: "Prendre le masque ", destination: "masque" }, { titre: "Avancer sans prendre de masque", destination: "expose" }]
    },

    masque: {
        titre: "Une protection efficace",
        description: "Vous tenez un masque dans vos mains et apercevez la lumière du jour. Avez-vous mis votre masque?",
        image: "masque.jpg",
        boutons: [{ titre: 'Vous avez votre masque', destination: 'fin' }, { titre: 'Vous navez pas de masque', destination: 'mort' }]
    },

    expose: {
        titre: "Le Masque Oublié",
        description: "Vous choisissez de ne rien toucher et de ne pas prendre le masque et vous êtes à l'extérieur et contemplez la lumière du jour. Avez-vous votre masque?",
        image: "lumiere.jpg",
        boutons: [{ titre: 'Non, vous navez pas de masque', destination: 'debut' }]
    },



};

function goToChapter(cle) {
    if (typeof cle === "object") {
        console.log(cle.titre);
        console.log(cle.description);
        console.log(cle.boutton);
    }
    else {
        console.log("Mauvaise clé de chapitre");
    }
}
goToChapter(chapters.debut);