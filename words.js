const words = {
    anatomie: {
        normal: ["cerveau", "coeur", "crane", "dent", "doigt", "estomac", "foie", "genou", "gorge", "jambe", "langue", "muscle", "nerf", "nez", "oeil", "ongle", "oreille", "os", "peau", "pied", "poumon", "rein", "sang", "veine"],
        difficile: ["alveole", "amygdale", "bronchiole", "cartilage", "clavicule", "duodenum", "epiderme", "hypophyse", "intestin", "ligament", "meninges", "oesophage", "pancreas", "phalange", "retine", "synovie", "tendon", "thyroide", "trachee", "vertebre"]
    },

    animauxCommuns: {
        enfant: ["chat", "chien", "lion", "loup", "ours", "poule", "rat", "singe", "vache"],
        facile: ["chat", "cheval", "chien", "coq", "lapin", "lion", "loup", "ours", "porc", "poule", "rat", "singe", "souris", "tigre", "vache", "zebre"],
        normal: ["agneau", "aigle", "belette", "biche", "castor", "cerf", "cygne", "dauphin", "ecureuil", "gazelle", "girafe", "gorille", "hibou", "loutre", "mouton", "panda", "perroquet", "phoque", "pingouin", "renard", "tortue"],
        difficile: ["antilope", "autruche", "cachalot", "chameau", "chauve-souris", "dromadaire", "elephant", "hippopotame", "kangourou", "ornithorynque", "rhinoceros", "salamandre"]
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
        facile: ["arts", "boxe", "danse", "foot", "golf", "judo", "karate", "lutte", "rugby", "ski", "surf", "tennis", "tir", "velo", "yoga"],
        normal: ["aviron", "baseball", "basket", "bowling", "course", "cricket", "escrime", "hockey", "natation", "patinage", "peche", "ping-pong", "plongee", "polo", "squash", "voile"],
        difficile: ["alpinisme", "biathlon", "curling", "decathlon", "escalade", "handball", "heptathlon", "marathon", "pentathlon", "skeleton", "taekwondo", "triathlon", "volleyball", "waterpolo"]
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
    }
};

export default words;
