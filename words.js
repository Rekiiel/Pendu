const words = {
    animauxCommuns: {
        enfant: ["chat", "chien", "lion", "ours", "loup"],
        facile: ["chat", "chien", "lion", "ours", "loup", "zebre", "singe", "tigre", "lapin"],
        normal: ["girafe", "gorille", "renard", "gazelle", "tortue", "hibou", "panda", "loutre", "castor"],
        difficile: ["rhinoceros", "hippopotame", "kangourou", "chauve-souris", "dromadaire"]
    },

    animauxRares: {
        normal: ["panthere", "jaguar", "leopard", "guepard", "alpaga"],
        difficile: ["brachiosaurus", "tyrannosaurus", "diplodocus", "megalosaure", "allosaure", "ankylosaurus", "spinosaurus"]
    },

    fruitsEtLegumesCommuns: {
        enfant: ["pomme", "poire", "banane", "tomate"],
        facile: ["pomme", "poire", "banane", "orange", "citron", "tomate", "radis"],
        normal: ["fraise", "carotte", "poireau", "oignon", "haricot", "melon", "peche"],
        difficile: ["pamplemousse", "clementine", "artichaut"]
    },

    fruitsEtLegumesExotiques: {
        normal: ["mangue", "papaye", "goyave", "grenade", "avocat"],
        difficile: ["pitahaya", "ramboutan", "fruit-dragon"]
    },

    vetements: {
        enfant: ["robe", "jupe", "pull", "gant", "sac"],
        facile: ["robe", "jupe", "pull", "gant", "sac"],
        normal: ["chemise", "pantalon", "manteau", "ceinture", "echarpe"],
        difficile: ["impermeable", "combinaison"]
    },

    meubles: {
        enfant: ["lit", "table", "chaise"],
        facile: ["table", "chaise", "lit", "lampe"],
        normal: ["canape", "fauteuil", "armoire", "etagere"],
        difficile: ["bibliotheque", "garde-robe"]
    },

    transports: {
        enfant: ["bus", "velo", "moto"],
        facile: ["bus", "train", "velo", "moto"],
        normal: ["voiture", "bateau", "camion", "avion"],
        difficile: ["helicoptere", "sous-marin", "trottinette"]
    },

    metiers: {
        facile: ["vendeur", "coiffeur", "acteur", "danseur"],
        normal: ["infirmier", "architecte", "decorateur", "paysagiste"],
        difficile: ["chirurgien", "informaticien", "psychologue"]
    },

    sciencesEtTechniques: {
        normal: ["atome", "energie", "reseau", "serveur"],
        difficile: ["chromosome", "magnetisme", "photosynthese", "metamorphisme", "epistemologie"]
    },

    anatomie: {
        normal: ["muscle", "cerveau", "poumon", "estomac"],
        difficile: ["pancreas", "thyroide", "hypophyse", "ligament"]
    },

    astronomie: {
        normal: ["etoile", "planete", "comete", "galaxie"],
        difficile: ["supernova", "nebuleuse", "magnetar", "constellation"]
    },

    mythologie: {
        normal: ["zeus", "thor", "odin", "loki", "isis"],
        difficile: ["hephaistos", "minotaure", "chimere"]
    },

    artEtCulture: {
        facile: ["danse", "chant", "film", "livre"],
        normal: ["theatre", "cinema", "musique", "peinture"],
        difficile: ["choreographie", "scenographie"]
    },

    philosophie: {
        difficile: ["metaphysique", "phenomenologie", "existentialisme", "materialisme", "empirisme"]
    },

    informatique: {
        facile: ["site", "jeu", "mail"],
        normal: ["logiciel", "donnee", "serveur", "cookie"],
        difficile: ["algorithme", "cryptographie"]
    }
};

export default words;
