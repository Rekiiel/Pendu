const words = {
    anatomie: {
        normal: ["cerveau", "coeur", "crane", "dent", "doigt", "estomac", "foie", "genou", "gorge", "jambe", "langue", "muscle", "nerf", "nez", "oeil", "ongle", "oreille", "os", "peau", "pied", "poumon", "rein", "sang", "veine", "bouche", "bras", "cheville", "cou", "epaule", "hanche", "levre", "menton", "poignet", "poitrine", "sourcil"],
        difficile: ["alveole", "amygdale", "bronchiole", "cartilage", "clavicule", "duodenum", "epiderme", "hypophyse", "intestin", "ligament", "meninges", "oesophage", "pancreas", "phalange", "retine", "synovie", "tendon", "thyroide", "trachee", "vertebre", "abdomen", "aorte", "appendice", "artere", "biceps", "colonne", "diaphragme"]
    },

    animauxCommuns: {
        enfant: ["chat", "chien", "lion", "loup", "ours", "poule", "rat", "singe", "vache", "canard", "cochon", "poney", "lapin"],
        facile: ["chat", "cheval", "chien", "coq", "lapin", "lion", "loup", "ours", "porc", "poule", "rat", "singe", "souris", "tigre", "vache", "zebre", "canard", "chevre", "cochon", "poney", "requin"],
        normal: ["agneau", "aigle", "belette", "biche", "castor", "cerf", "cygne", "dauphin", "ecureuil", "gazelle", "girafe", "gorille", "hibou", "loutre", "mouton", "panda", "perroquet", "phoque", "pingouin", "renard", "tortue", "abeille", "araignee"],
        difficile: ["antilope", "autruche", "cachalot", "chameau", "chauve-souris", "dromadaire", "elephant", "hippopotame", "kangourou", "ornithorynque", "rhinoceros", "salamandre", "crocodile", "scorpion"]
    },

    animauxRares: {
        normal: ["alpaga", "anaconda", "bison", "blaireau", "cobra", "coyote", "guepard", "herisson", "jaguar", "koala", "leopard", "lezard", "marmotte", "panthere", "raton", "tapir", "tatou", "toucan", "wombat"],
        difficile: ["allosaure", "ankylosaurus", "archaeopteryx", "beluga", "brachiosaurus", "diplodocus", "iguanodon", "lamentin", "megalosaure", "narval", "okapi", "pangolin", "pterodactyle", "spinosaurus", "stegosaure", "triceraptor", "tyrannosaure", "velociraptor"]
    },

    artEtCulture: {
        facile: ["art", "chant", "danse", "dessin", "film", "livre", "mime", "note", "photo", "rock", "role", "scene", "style"],
        normal: ["ballet", "cinema", "concert", "conte", "drame", "musique", "opera", "peinture", "poeme", "poesie", "roman", "sketch", "statue", "theatre"],
        difficile: ["aquarelle", "architecture", "calligraphie", "ceramique", "choreographie", "lithographie", "mosaique", "partition", "scenographie", "sculpture", "symphonie"]
    },

    astronomie: {
        normal: ["astre", "comete", "eclipse", "etoile", "galaxie", "jupiter", "lune", "mars", "mercure", "meteor", "neptune", "planete", "pluton", "saturne", "soleil", "terre", "uranus", "venus"],
        difficile: ["andromede", "asteroide", "constellation", "magnetar", "nebuleuse", "neutron", "nova", "orion", "parsec", "pulsar", "quasar", "satellite", "supernova", "telescope"]
    },

    botanique: {
        normal: ["arbuste", "bambou", "bourgeon", "branche", "cactus", "ecorce", "feuille", "fleur", "fruit", "graine", "herbe", "mousse", "petale", "plante", "racine", "seve", "tige", "tronc"],
        difficile: ["chlorophylle", "conifere", "cotyledon", "eucaryote", "fougere", "lichens", "mycelium", "orchidee", "pistil", "pollen", "rhizome", "spore", "stomate", "symbiose"]
    },

    fruitsEtLegumesCommuns: {
        enfant: ["banane", "carotte", "citron", "fraise", "orange", "peche", "poire", "pomme", "tomate"],
        facile: ["abricot", "ail", "ananas", "banane", "carotte", "cerise", "citron", "chou", "fraise", "kiwi", "orange", "peche", "poire", "poireau", "pomme", "prune", "radis", "raisin", "tomate"],
        normal: ["amande", "aubergine", "avocat", "betterave", "brocoli", "cassis", "celeri", "courgette", "endive", "epinard", "figue", "framboise", "haricot", "laitue", "mangue", "melon", "mure", "navet", "oignon", "olive", "pasteque", "potiron", "salade"],
        difficile: ["artichaut", "asperge", "bergamote", "clementine", "gingembre", "grenade", "nectarine", "pamplemousse", "rhubarbe"]
    },

    fruitsEtLegumesExotiques: {
        normal: ["avocat", "banane", "cacao", "datte", "goyave", "grenade", "kaki", "kiwi", "litchi", "mangue", "noix", "papaye", "passion", "pistache"],
        difficile: ["carambole", "combava", "durian", "feijoa", "fruit-dragon", "jaboticaba", "kumquat", "longane", "mangoustan", "pitahaya", "ramboutan", "salak", "tamarin"]
    },

    geographie: {
        normal: ["alpes", "canyon", "cascade", "colline", "desert", "dune", "falaise", "fleuve", "foret", "glacier", "grotte", "ile", "jungle", "lac", "mer", "montagne", "ocean", "plage", "plaine", "riviere", "rocher", "source", "vallee", "volcan"],
        difficile: ["archipel", "atoll", "basalte", "delta", "estuaire", "fjord", "geyser", "isthme", "lagune", "mangrove", "oasis", "plateau", "recif", "taiga", "toundra"]
    },

    informatique: {
        facile: ["blog", "chat", "code", "data", "forum", "jeu", "mail", "site", "spam", "virus", "wifi", "web"],
        normal: ["android", "backup", "cookie", "donnee", "ecran", "fichier", "google", "image", "linux", "logiciel", "memoire", "plugin", "python", "reseau", "script", "serveur", "systeme", "windows"],
        difficile: ["algorithme", "compilateur", "cryptographie", "debugger", "ethernet", "firewall", "framework", "interface", "kernel", "protocol", "recursion", "routeur", "syntaxe", "virtualisation"]
    },

    instruments: {
        facile: ["banjo", "basse", "flute", "harpe", "luth", "piano", "orgue", "tabla", "tambour", "violon"],
        normal: ["alto", "batterie", "basson", "clairon", "guitare", "harmonica", "hautbois", "maracas", "saxophone", "trombone", "trompette", "tuba", "ukulele", "viole", "xylophone"],
        difficile: ["accordeon", "balafon", "clarinette", "clavecin", "contrebasse", "cornemuse", "dulcimer", "euphonium", "mandoline", "mellotron", "sitar", "theorbe", "vielle"]
    },

    metiers: {
        facile: ["acteur", "agent", "auteur", "boucher", "boulanger", "caissier", "coiffeur", "danseur", "facteur", "fermier", "fleuriste", "gardien", "marin", "peintre", "policier", "pompier", "vendeur"],
        normal: ["architecte", "artisan", "avocat", "banquier", "bijoutier", "biologiste", "carreleur", "chanteur", "comptable", "couturier", "decorateur", "dentiste", "infirmier", "jardinier", "journaliste", "menuisier", "musicien", "paysagiste", "plombier", "professeur"],
        difficile: ["archeologue", "astronaute", "cardiologue", "chirurgien", "comedien", "diplomate", "ethnologue", "geologue", "informaticien", "neurologue", "pediatre", "psychologue", "sociologue", "zoologue"]
    },

    meubles: {
        enfant: ["banc", "chaise", "lit", "table"],
        facile: ["banc", "bureau", "chaise", "coffre", "lampe", "lit", "meuble", "pouf", "table"],
        normal: ["armoire", "bahut", "buffet", "canape", "commode", "console", "divan", "etagere", "fauteuil", "miroir", "placard", "siege", "tabouret", "vitrine"],
        difficile: ["bibliotheque", "bonnetiere", "coiffeuse", "credence", "garde-robe", "meridienne", "ottomane", "penderie", "secretaire", "vaisselier", "vestiaire"]
    },

    mythologie: {
        normal: ["anubis", "atlas", "chaos", "dragon", "echo", "hades", "isis", "loki", "mars", "meduse", "muses", "odin", "pan", "thor", "venus", "zeus"],
        difficile: ["achille", "artemis", "centaure", "chimere", "griffon", "hephaistos", "hercule", "hydre", "kraken", "minotaure", "morphee", "orphee", "pegase", "phenix", "sphinx", "triton"]
    },

    philosophie: {
        normal: ["amour", "art", "beaute", "bien", "corps", "desir", "doute", "esprit", "ethique", "idee", "liberte", "logique", "morale", "nature", "raison", "sagesse", "temps", "verite"],
        difficile: ["altruisme", "anarchie", "empirisme", "epistemologie", "existentialisme", "hedonisme", "humanisme", "idealisme", "marxisme", "materialisme", "metaphysique", "nihilisme", "phenomenologie", "positivisme", "pragmatisme", "stoicisme"]
    },

    sciencesEtTechniques: {
        normal: ["acide", "atome", "chaleur", "chimie", "cycle", "energie", "force", "fusion", "laser", "masse", "matiere", "noyau", "onde", "plasma", "poids", "reseau", "serveur", "vapeur"],
        difficile: ["catalyse", "chromosome", "entropie", "enzyme", "isotope", "magnetisme", "mecanique", "metabolisme", "metamorphisme", "molecule", "neutron", "photosynthese", "polymorphisme", "telemetrie"]
    },

    sports: {
        enfant: ["foot", "velo", "judo", "boxe", "golf", "ski", "yoga", "danse", "surf", "tennis", "rugby", "ping"],
        facile: ["foot", "velo", "judo", "boxe", "golf", "ski", "yoga", "rugby", "tennis", "surf", "lutte", "danse", "basket", "course", "marche", "nage", "peche", "ping", "saut", "volley"],
        normal: ["athle", "basket", "course", "danse", "hockey", "karate", "lutte", "natation", "volley", "aviron", "baseball", "bowling", "cyclisme", "escrime", "football", "handball", "patinage", "plongee", "squash"],
        difficile: ["escalade", "escrime", "handball", "marathon", "plongee", "triathlon", "waterpolo", "acrobatie", "alpinisme", "badminton", "biathlon", "curling", "equitation", "gymnastique", "pentathlon", "petanque", "randonnee", "skateboard", "snowboard"]
    },

    transports: {
        enfant: ["auto", "bus", "moto", "taxi", "train", "velo"],
        facile: ["auto", "bus", "moto", "taxi", "train", "tram", "velo"],
        normal: ["avion", "bateau", "camion", "cargo", "metro", "navire", "pedalo", "quad", "scooter", "tank", "voiture", "yacht"],
        difficile: ["aeronef", "ballon", "biplane", "dirigeable", "funiculaire", "helicoptere", "hydravion", "planeur", "sous-marin", "telesiege", "trottinette", "zeppelin"]
    },

    vetements: {
        enfant: ["gant", "jupe", "pull", "robe", "sac"],
        facile: ["botte", "gant", "jean", "jupe", "pull", "robe", "sac", "slip", "veste"],
        normal: ["anorak", "bonnet", "ceinture", "chapeau", "chemise", "collant", "costume", "cravate", "echarpe", "gilet", "manteau", "pantalon", "short", "string", "tenue"],
        difficile: ["bustier", "caftan", "cardigan", "combinaison", "corset", "debardeur", "impermeable", "peignoir", "poncho", "smoking", "soutien"]
    },

    nourriture: {
        enfant: ["pain", "lait", "oeuf", "riz", "pate", "soupe", "pizza", "fruit", "glace", "bonbon", "gateau", "pomme", "banane", "jus"],
        facile: ["cafe", "pain", "lait", "oeuf", "riz", "pate", "soupe", "pizza", "fruit", "glace", "sucre", "sel", "the", "miel", "eau", "coca", "sirop", "biere", "chips", "kebab", "melon", "olive", "poire", "raisin"],
        normal: ["beurre", "crepe", "frite", "gateau", "jambon", "poulet", "salade", "sauce", "viande", "yaourt", "fromage", "legume", "poisson", "abricot", "ananas", "avocat", "carotte", "cerise", "citron", "fraise", "haricot", "orange", "peche", "prune", "radis", "tomate"],
        difficile: ["aubergine", "courgette", "endive", "ratatouille", "vinaigrette", "champignon", "crevette", "escargot", "homard", "artichaut", "asperge", "betterave", "brocoli", "chou-fleur", "concombre", "echalote", "epinard", "gingembre", "pamplemousse"]
    },

    pays: {
        facile: ["chine", "france", "japon", "maroc", "russie", "suisse", "bresil", "canada", "cuba", "egypte", "espagne", "grece", "inde", "italie", "kenya", "perou", "qatar", "tchad", "togo"],
        normal: ["algerie", "belgique", "espagne", "grece", "irlande", "mexique", "pologne", "tunisie", "albanie", "autriche", "bolivie", "bulgarie", "cameroun", "colombie", "croatie", "equateur", "finlande", "hongrie", "islande", "jordanie", "liban", "mali", "monaco", "nepal", "nigeria", "panama", "paraguay", "portugal", "senegal", "suede", "syrie", "taiwan", "uruguay", "vietnam", "yemen"],
        difficile: ["australie", "cambodge", "danemark", "ethiopie", "finlande", "indonesie", "portugal", "afghanistan", "argentine", "azerbaidjan", "bangladesh", "botswana", "kazakhstan", "kirghizistan", "madagascar", "mauritanie", "mozambique", "nicaragua", "ouzbekistan", "philippines", "singapour", "tadjikistan", "tanzanie", "venezuela", "zimbabwe"]
    },

    musique: {
        enfant: ["note", "piano", "rock", "jazz", "voix", "chant", "flute", "son", "rap", "tam"],
        facile: ["note", "piano", "radio", "son", "voix", "jazz", "rock", "tempo", "basse", "blues", "chant", "choeur", "flute", "funk", "metal", "opera", "rap", "solo", "swing", "valse"],
        normal: ["accord", "batterie", "concert", "guitare", "musique", "rythme", "violon", "archet", "artiste", "chanson", "clavier", "disque", "groupe", "harpe", "micro", "orchestre", "parole", "studio", "tambour", "timbre", "touche", "volume"],
        difficile: ["harmonie", "melodie", "orchestre", "partition", "symphonie", "trompette", "acoustique", "arpege", "baryton", "clarinette", "crescendo", "cymbalum", "euphonium", "glissando", "mandoline", "metronome", "saxophone", "solfege", "trombone", "vibraphone"]
    },

    temps: {
        enfant: ["jour", "nuit", "mois", "heure", "midi", "soir", "matin", "an", "lundi", "mars"],
        facile: ["jour", "nuit", "mois", "heure", "midi", "soir", "matin", "temps", "lundi", "mardi", "jeudi", "mars", "mai", "juin", "aout", "date", "hier", "hiver", "printemps"],
        normal: ["annee", "automne", "minute", "semaine", "saison", "seconde", "weekend", "agenda", "avenir", "decennie", "dimanche", "janvier", "juillet", "mercredi", "octobre", "passe", "present", "samedi", "siecle", "vendredi"],
        difficile: ["calendrier", "chronologie", "eternite", "horoscope", "millenaire", "antiquite", "centenaire", "decembre", "equinoxe", "fevrier", "novembre", "perpetuel", "quotidien", "semestre", "septembre", "solstice", "temporel", "trimestre"]
    },

    cinema: {
        enfant: ["film", "star", "hero", "dessin", "conte", "image", "ecran", "siege", "salle"],
        facile: ["film", "star", "role", "scene", "clip", "serie", "court", "drame", "acteur", "affiche", "cinema", "decor", "dessin", "ecran", "effet", "image", "movie", "photo", "place", "siege"],
        normal: ["acteur", "cinema", "comedie", "ecran", "montage", "plateau", "script", "action", "cadrage", "casting", "clap", "costume", "critique", "fiction", "filmage", "musique", "prise", "replay", "studio", "theatre"],
        difficile: ["cameraman", "doublage", "figurant", "producteur", "realisateur", "scenario", "animation", "assistant", "cascadeur", "documentaire", "eclairage", "generique", "maquillage", "pellicule", "projection", "scenariste", "sequence", "spectateur", "steadicam", "travelling"]
    },

    emotions: {
        enfant: ["joie", "peur", "rire", "amour", "rage", "paix", "honte", "calme", "espoir", "fier"],
        facile: ["joie", "peur", "rire", "amour", "rage", "paix", "honte", "calme", "doute", "envie", "espoir", "fierte", "genie", "haine", "peine", "pleur", "regret", "stress", "souci"],
        normal: ["bonheur", "colere", "espoir", "fierete", "plaisir", "sourire", "tristesse", "angoisse", "courage", "douleur", "emotion", "extase", "fureur", "humeur", "malaise", "passion", "respect", "sagesse", "serenite"],
        difficile: ["euphorie", "jalousie", "melancolie", "nostalgie", "optimisme", "pessimisme", "admiration", "amertume", "anxiete", "beatitude", "confiance", "deception", "empathie", "gratitude", "inquietude", "mefiance", "rancoeur", "sympathie", "tolerance"]
    },

    sciences: {
        enfant: ["eau", "feu", "air", "terre", "etoile", "lune", "soleil", "vent", "pluie", "neige"],
        facile: ["atome", "force", "masse", "poids", "terre", "corps", "onde", "air", "eau", "etoile", "feu", "lune", "neige", "nuage", "pluie", "soleil", "vent", "vide", "virus"],
        normal: ["chimie", "energie", "formule", "matiere", "physique", "planete", "reaction", "acide", "adn", "algue", "angle", "calcul", "cellule", "chaleur", "climat", "lumiere", "mineral", "plasma", "volume"],
        difficile: ["astronomie", "biologie", "gravitation", "hypothese", "molecule", "particule", "algebre", "analyse", "bacterie", "carbone", "chromosome", "equation", "geometrie", "neutron", "oxygene", "proton", "synthese", "theoreme"]
    },

    maison: {
        enfant: ["lit", "mur", "toit", "porte", "table", "chaise", "salon", "bain", "cave", "jardin"],
        facile: ["lit", "mur", "toit", "porte", "salon", "cave", "four", "salle", "table", "bain", "chaise", "garage", "jardin", "lampe", "meuble", "miroir", "piece", "prise", "radio", "store"],
        normal: ["armoire", "bureau", "cuisine", "douche", "escalier", "fenetre", "placard", "balcon", "chambre", "couloir", "entree", "facade", "grenier", "palier", "plafond", "rideau", "store", "terrasse", "toilette"],
        difficile: ["bibliotheque", "buanderie", "cheminee", "veranda", "vestibule", "antichambre", "ascenseur", "chauffage", "corniche", "dressing", "isolation", "lucarne", "mansarde", "mezzanine", "penderie", "rangement", "soupente", "tabouret"]
    },

    transport: {
        enfant: ["bus", "train", "taxi", "metro", "velo", "moto"],
        facile: ["auto", "bus", "train", "taxi", "metro", "velo", "moto", "roue"],
        normal: ["avion", "bateau", "camion", "navire", "scooter", "tramway", "voiture"],
        difficile: ["ambulance", "helicoptere", "locomotive", "montgolfiere", "telesiege"]
    },

    ecole: {
        enfant: ["sac", "livre", "note", "stylo", "craie", "classe"],
        facile: ["sac", "livre", "note", "stylo", "craie", "classe", "table", "cours"],
        normal: ["cahier", "cartable", "devoir", "examen", "lecon", "maitresse", "tableau"],
        difficile: ["bibliotheque", "geometrie", "grammaire", "recreation", "vocabulaire"]
    },

    metiers: {
        facile: ["prof", "chef", "juge", "maire", "garde", "agent", "coach", "guide", "acteur", "auteur", "coiffeur", "danseur", "docteur", "fermier", "patron", "pilote", "policier", "vendeur"],
        normal: ["avocat", "banquier", "boucher", "coiffeur", "dentiste", "facteur", "fermier", "pompier", "artiste", "bijoutier", "boulanger", "chauffeur", "cuisinier", "infirmier", "jardinier", "journaliste", "menuisier", "musicien", "pecheur", "peintre", "plombier", "serveur"],
        difficile: ["architecte", "astronaute", "chirurgien", "diplomate", "ingenieur", "journaliste", "archeologue", "biologiste", "cardiologue", "comedien", "decorateur", "electricien", "historien", "pediatre", "pharmacien", "photographe", "psychologue", "sociologue", "veterinaire"]
    },

    pays: {
        facile: ["chine", "france", "japon", "maroc", "russie", "suisse", "bresil", "canada", "cuba", "egypte", "espagne", "grece", "inde", "italie", "kenya", "perou", "qatar", "tchad", "togo"],
        normal: ["algerie", "belgique", "espagne", "grece", "irlande", "mexique", "pologne", "tunisie", "albanie", "autriche", "bolivie", "bulgarie", "cameroun", "colombie", "croatie", "equateur", "finlande", "hongrie", "islande", "jordanie", "liban", "mali", "monaco", "nepal", "nigeria", "panama", "paraguay", "portugal", "senegal", "suede", "syrie", "taiwan", "uruguay", "vietnam", "yemen"],
        difficile: ["australie", "cambodge", "danemark", "ethiopie", "finlande", "indonesie", "portugal", "afghanistan", "argentine", "azerbaidjan", "bangladesh", "botswana", "kazakhstan", "kirghizistan", "madagascar", "mauritanie", "mozambique", "nicaragua", "ouzbekistan", "philippines", "singapour", "tadjikistan", "tanzanie", "venezuela", "zimbabwe"]
    }
};

export default words;
