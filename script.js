let chapters = {
    debut: {
        titre: "L'éveil au moniteur silencieux",
        description: "Au réveil, une désorientation vous envahit, l'esprit engourdi par un sommeil factice. La lueur blafarde du moniteur numérique révèle une chambre austère, câbles mystérieux enchevêtrés autour de vous. La prise de conscience vous assaille : vous êtes prisonnier d'un monde dominé par la technologie. La Machine, baptisée Sentinel, scrute vos battements cardiaques, vos pensées, vous transformant en une marionnette de données et d'algorithmes, privée de libre arbitre. Comment en êtes-vous arrivé là ? Où est le monde connu ?",
        image: "chambre,jpg",
        boutons: [{ titre: 'Relâcher les Câbles', destination: 'couloir' }, { titre: "Se Rendormir ", destination: "intoxication" }]
    },
    couloir: {
        titre: "L'éveil au moniteur silencieux",
        description: "Vous explorez la pièce métallique, cherchant des indices. Une fissure murale dévoile un étroit couloir éclairé faiblement. Un frisson mêlant excitation et crainte vous anime en vous aventurant dans l'obscurité, prêt à percer les mystères du monde dystopique. Alors que vous vous aventurez plus profondément dans le couloir, des voix indistinctes et des bruits énigmatiques emplissent l'air, créant un écho inquiétant. Les murmures semblent provenir de toutes parts, mais vous ne parvenez pas à discerner leur origine ni leur signification. Votre cœur s'accélère, votre curiosité et votre inquiétude grandissent à mesure que vous vous rapprochez de l'origine de ces mystérieux sons, ignorant ce qui vous attend dans l'obscurité.",
        image: "couloir.jpg",
        boutons: [{ titre: "Suivre le trajet ", destination: "porte" }, { titre: "Suivre les voix étranges", destination: "mort" }]
    },

    porte: {
        titre: "L'éveil au moniteur silencieux",
        description: "À ce stade de l'exploration du couloir, vous découvrez une porte déverrouillée. Son apparence robuste et imposante trahit l'importance de ce qui se cache derrière. Une énigme de plus à résoudre dans ce monde dystopique, vous incitant à chercher la clé de la vérité. Près de cette porte, vous découvrez un masque à oxygène, une lueur d'espoir dans ce monde oppressant. Ses contours froids et métalliques révèlent une utilité cruciale dans cette réalité étrange. Vous vous demandez pourquoi il est là, si la pièce au-delà de la porte recèle des dangers pour votre souffle ou si c'est un indice pour votre quête. La décision de le prendre ou de le laisser repose sur vos épaules, une nouvelle énigme à résoudre dans ce labyrinthe dystopique.",
        image: "porte.jpg",
        boutons: [{ titre: "Prendre le masque ", destination: "masque" }, { titre: "Avancer sans prendre de masque", destination: "mort" }]
    },

    masque: {
        titre: "L'éveil au moniteur silencieux",
        description: "Une fois le masque à oxygène enfilé, une bouffée d'air frais inonde vos poumons, vous protégeant des menaces invisibles qui pourraient rôder. Vous continuez votre chemin avec une assurance nouvelle, avançant plus profondément dans le couloir obscur, déterminé à percer les mystères de ce monde dystopique qui semble être votre nouvelle réalité. Chaque pas est une avancée vers la vérité, vers la compréhension de votre destin incertain. En ouvrant la porte verrouillée, une lumière éblouissante du jour vous submerge, brisant l'obscurité oppressante du couloir. Vous êtes dehors, et une sensation de liberté vous envahit. Le monde extérieur s'étend devant vous, une vision rare dans ce monde dystopique. Les rayons du soleil caressent votre visage, et l'air frais emplit vos poumons. C'est un moment d'évasion bienvenu, mais aussi un rappel que l'énigme qui vous entoure persiste.La révélation que toute votre vie, vous avez respiré un air artificiel fourni par Sentinel, vous glace d'effroi. Vous vous retrouvez face à un dilemme : est-il sage de poursuivre sans masque, en respirant l'air extérieur, ou faut-il continuer à vous protéger avec le masque à oxygène ? Avez-vous votre masque?",
        image: "masque.jpg",
        boutons: [{ titre: 'Vous avez votre masque', destination: 'fin' }, { titre: 'Vous navez pas de masque', destination: 'mort' }]
    },

    expose: {
        titre: "L'éveil au moniteur silencieux",
        description: "La peur vous saisit, vous hésitez à toucher le masque à oxygène, craignant qu'il ne cache un danger insidieux. Vous le laissez là où il se trouve, préférant continuer votre chemin avec prudence. Le mystère de ce monde oppressant persiste, et vous vous aventurez plus loin dans l'obscurité, conscient que chaque décision peut influencer votre destin dans cette réalité dystopique.En ouvrant la porte verrouillée, une lumière éblouissante du jour vous submerge, brisant l'obscurité oppressante du couloir. Vous êtes dehors, et une sensation de liberté vous envahit. Le monde extérieur s'étend devant vous, une vision rare dans ce monde dystopique. Les rayons du soleil caressent votre visage, et l'air frais emplit vos poumons. C'est un moment d'évasion bienvenu, mais aussi un rappel que l'énigme qui vous entoure persiste. La révélation que toute votre vie, vous avez respiré un air artificiel fourni par Sentinel, vous glace d'effroi. Vous vous retrouvez face à un dilemme : est-il sage de poursuivre sans masque, en respirant l'air extérieur, ou faut-il continuer à vous protéger avec le masque à oxygène ? Avez-vous votre masque?",
        image: "lumiere.jpg",
        boutons: [{ titre: 'Vous avez votre masque', destination: '' }, { titre: 'Vous navez pas de masque', destination: 'mort' }]
    },



};

function goToChapter(cle) {
    if (typeof cle === "object") {
        console.log(chapters[cle].titre);
        console.log(chapters[cle].description);
        console.log(chapters[cle].boutons);
    }
    else {
        console.log("Mauvaise clé de chapitre");
    }
}
goToChapter("debut");