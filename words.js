const words = [
    // Animaux
    "chat", "chien", "lion", "tigre", "elephant", "girafe", "zebre", "rhinoceros", "hippopotame", "kangourou",
    "koala", "panda", "gorille", "singe", "ours", "loup", "renard", "cerf", "antilope", "gazelle",
    "dauphin", "baleine", "requin", "tortue", "crocodile", "serpent", "aigle", "faucon", "hibou", "perroquet",
    "pingouin", "phoque", "morse", "loutre", "castor", "hamster", "lapin", "herisson", "ecureuil", "chauve-souris",
    "panthere", "jaguar", "leopard", "guepard", "hyene", "chameau", "dromadaire", "alpaga", "lama", "bison",
    
    // Fruits et légumes
    "pomme", "poire", "banane", "orange", "citron", "fraise", "framboise", "myrtille", "raisin", "mangue",
    "carotte", "poireau", "oignon", "tomate", "courgette", "aubergine", "brocoli", "haricot", "potiron", "radis",
    "ananas", "papaye", "goyave", "grenade", "kiwi", "figue", "datte", "abricot", "peche", "prune",
    "cerise", "melon", "pasteque", "avocat", "pamplemousse", "mandarine", "clementine", "noix", "amande", "pistache",
    "asperge", "epinard", "celeri", "betterave", "navet", "panais", "artichaut", "fenouil", "chou", "poivron",
    
    // Vêtements et accessoires
    "chemise", "pantalon", "robe", "jupe", "manteau", "veste", "pull", "tshirt", "short", "chaussette",
    "chapeau", "casquette", "bonnet", "echarpe", "gant", "ceinture", "cravate", "noeud", "montre", "bracelet",
    "collier", "bague", "boucle", "lunette", "sac", "valise", "portefeuille", "parapluie", "maillot", "pyjama",
    
    // Maison et mobilier
    "table", "chaise", "canape", "fauteuil", "lit", "armoire", "commode", "bureau", "etagere", "miroir",
    "lampe", "tapis", "rideau", "coussin", "tableau", "horloge", "pendule", "vaisselle", "casserole", "poele",
    "four", "frigo", "congelateur", "micro-onde", "lave-linge", "aspirateur", "balai", "pelle", "poubelle", "placard",
    
    // Transports
    "voiture", "velo", "moto", "bus", "train", "avion", "bateau", "helicoptere", "tramway", "metro",
    "camion", "tracteur", "ambulance", "taxi", "scooter", "skateboard", "trottinette", "yacht", "sous-marin", "fusee",
    
    // Métiers supplémentaires
    "infirmier", "chirurgien", "pharmacien", "psychologue", "comptable", "banquier", "vendeur", "serveur", "coiffeur", "maquilleur",
    "acteur", "danseur", "chanteur", "peintre", "sculpteur", "ecrivain", "traducteur", "secretaire", "consultant", "analyste",
    "chercheur", "scientifique", "informaticien", "developpeur", "designer", "architecte", "decorateur", "paysagiste", "agriculteur", "eleveur",
    
    // Loisirs et sports
    "cinema", "theatre", "musee", "concert", "festival", "exposition", "lecture", "peinture", "dessin", "sculpture",
    "jardinage", "bricolage", "cuisine", "patisserie", "voyage", "randonnee", "camping", "peche", "chasse", "photographie",
    "echecs", "puzzle", "sudoku", "mots-croises", "karaoke", "danse", "yoga", "meditation", "massage", "relaxation",
    
    // Nature et environnement
    "foret", "montagne", "plage", "desert", "jungle", "savane", "prairie", "marais", "cascade", "grotte",
    "volcan", "geyser", "glacier", "iceberg", "canyon", "falaise", "rocher", "sable", "terre", "herbe",
    "fleur", "arbre", "buisson", "champignon", "mousse", "lichen", "algue", "corail", "plante", "racine",
    
    // Météo et astronomie
    "soleil", "lune", "etoile", "planete", "comete", "asteroide", "galaxie", "nebuleuse", "constellation", "satellite",
    "nuage", "pluie", "neige", "grele", "orage", "tempete", "ouragan", "cyclone", "tornade", "brouillard",
    "brume", "rosee", "givre", "verglas", "avalanche", "tsunami", "seisme", "eclipse", "meteorite", "atmosphere",
    
    // Mots abstraits
    "amour", "bonheur", "joie", "tristesse", "colere", "peur", "courage", "espoir", "reve", "destin",
    "liberte", "paix", "justice", "verite", "mensonge", "sagesse", "folie", "raison", "passion", "emotion",
    "intuition", "reflexion", "memoire", "oubli", "conscience", "inconscient", "imagination", "creativite", "talent", "genie",
    
    // Termes scientifiques
    "atome", "molecule", "cellule", "chromosome", "gene", "proteine", "enzyme", "hormone", "neurone", "synapse",
    "gravite", "magnetisme", "electricite", "radiation", "frequence", "amplitude", "longueur", "masse", "volume", "densite",
    "pression", "temperature", "chaleur", "energie", "force", "vitesse", "acceleration", "rotation", "friction", "reaction",
    
    // Termes technologiques
    "ordinateur", "tablette", "smartphone", "internet", "wifi", "bluetooth", "satellite", "reseau", "serveur", "routeur",
    "logiciel", "programme", "application", "donnee", "fichier", "dossier", "virus", "antivirus", "firewall", "cookie",
    "pixel", "resolution", "ecran", "clavier", "souris", "imprimante", "scanner", "webcam", "microphone", "haut-parleur",
    
    // Mots complexes supplémentaires
    "extraordinaire", "magnifique", "merveilleux", "fantastique", "incroyable", "mysterieux", "fascinant", "surprenant",
    "authentique", "spectaculaire", "formidable", "grandiose", "majestueux", "splendide", "fabuleux", "prodigieux",
    "phenomenal", "stupefiant", "eblouissant", "sensationnel", "epoustouflant", "remarquable", "exceptionnel", "incomparable",
    "impressionnant", "saisissant", "renversant", "bouleversant", "captivant", "envoutant", "hypnotisant", "subjuguant",
    
    // Termes culinaires
    "gastronomie", "cuisine", "recette", "ingredient", "assaisonnement", "marinade", "sauce", "bouillon", "ragout", "roti",
    "grillade", "friture", "mijote", "saute", "braise", "flambe", "gratine", "poele", "vapeur", "infusion",
    "patisserie", "boulangerie", "confiserie", "chocolaterie", "fromagerie", "charcuterie", "boucherie", "poissonnerie", "epicerie", "cave",
    
    // Architecture et construction
    "batiment", "maison", "immeuble", "gratte-ciel", "chateau", "palais", "cathedrale", "temple", "mosquee", "synagogue",
    "pont", "tunnel", "route", "autoroute", "boulevard", "avenue", "ruelle", "place", "jardin", "parc",
    "fontaine", "statue", "monument", "colonne", "arcade", "voute", "dome", "facade", "balcon", "terrasse",
    
    // Instruments de musique supplémentaires
    "violoncelle", "contrebasse", "clarinette", "hautbois", "basson", "trombone", "tuba", "cor", "mandoline", "sitar",
    "balafon", "djembe", "marimba", "vibraphone", "cornemuse", "dulcimer", "clavecin", "theorbe", "luth", "vielle",
    
    // Mythologie
    "zeus", "poseidon", "hades", "apollon", "artemis", "athena", "hermes", "ares", "aphrodite", "hephaistos",
    "thor", "odin", "loki", "freya", "anubis", "osiris", "isis", "horus", "brahma", "vishnu",
    "shiva", "bouddha", "dragon", "phoenix", "licorne", "griffon", "centaure", "minotaure", "chimere", "sphinx",
    
    // Géographie mondiale
    "himalaya", "sahara", "amazonie", "pacifique", "atlantique", "mediterranee", "everest", "kilimanjaro", "nil",
    "danube", "mississippi", "amazone", "andes", "alpes", "pyrenees", "carpates", "caucase", "oural", "gobi",
    
    // Littérature et genres
    "roman", "poesie", "nouvelle", "conte", "fable", "legende", "mythe", "biographie", "essai", "journal",
    "comedie", "tragedie", "drame", "satire", "fantaisie", "policier", "aventure", "science-fiction", "thriller",
    
    // Cinéma et théâtre
    "scenario", "dialogue", "acteur", "realisateur", "producteur", "montage", "cadrage", "decor", "costume",
    "maquillage", "plateau", "studio", "camera", "microphone", "projecteur", "scenario", "casting", "doublage",
    
    // Jeux et divertissements
    "monopoly", "scrabble", "domino", "backgammon", "billard", "flechettes", "puzzle", "labyrinthe", "devinette",
    "charade", "rebus", "enigme", "strategie", "simulation", "plateforme", "arcade", "console", "manette",
    
    // Astronomie avancée
    "supernova", "quasar", "pulsar", "magnetar", "nebuleuse", "constellation", "galaxie", "meteorite", "asteroide",
    "telescope", "satellite", "cosmonaute", "astronaute", "vaisseau", "station", "orbite", "eclipse", "atmosphere",
    
    // Médecine et anatomie
    "squelette", "muscle", "tendon", "ligament", "artere", "veine", "cerveau", "poumon", "estomac", "intestin",
    "pancreas", "thyroide", "hypophyse", "retine", "tympan", "cartilage", "moelle", "neurone", "hormone", "enzyme",
    
    // Botanique
    "chlorophylle", "photosynthese", "racine", "tige", "feuille", "petale", "nectar", "pollen", "graine", "spore",
    "rhizome", "bulbe", "tubercule", "bourgeon", "seve", "resine", "ecorce", "rameau", "pistil", "etamine",
    
    // Art contemporain
    "installation", "performance", "happening", "minimalisme", "conceptuel", "multimedia", "numerique", "virtuel",
    "interactif", "video", "collage", "assemblage", "street-art", "graffiti", "pochoir", "fresque", "murale",
    
    // Philosophie
    "metaphysique", "ethique", "logique", "esthetique", "epistemologie", "ontologie", "phenomenologie", "existentialisme",
    "materialisme", "idealisme", "empirisme", "rationalisme", "stoicisme", "epicurisme", "cynisme", "scepticisme",
    
    // Économie et finance
    "bourse", "action", "obligation", "dividende", "inflation", "deflation", "recession", "croissance", "budget",
    "deficit", "credit", "debit", "epargne", "placement", "investissement", "rendement", "liquidite", "solvabilite",
    
    // Géologie
    "granite", "basalte", "calcaire", "marbre", "quartz", "feldspath", "mica", "gneiss", "schiste", "ardoise",
    "erosion", "sedimentation", "metamorphisme", "magmatisme", "tectonique", "seisme", "faille", "filon", "strate",
    
    // Océanographie
    "maree", "vague", "courant", "plancton", "corail", "algue", "meduse", "crustace", "mollusque", "cetace",
    "recif", "atoll", "lagon", "estuaire", "fjord", "mangrove", "littoral", "abyssal", "pelagique", "benthique",
    
    // Psychologie
    "perception", "cognition", "emotion", "memoire", "attention", "motivation", "personnalite", "comportement",
    "apprentissage", "intelligence", "conscience", "inconscient", "psychanalyse", "therapie", "traumatisme",
    
    // Traditions et folklore
    "legende", "conte", "mythe", "ritual", "ceremonie", "festival", "carnaval", "masque", "costume", "danse",
    "chanson", "proverbe", "dicton", "superstition", "talisman", "amulette", "sortilege", "enchantement", "grimoire",
    
    // Métiers d'art
    "ebeniste", "orfevre", "bijoutier", "ceramiste", "verrier", "tapissier", "brodeur", "relieur", "graveur",
    "sculpteur", "doreur", "mosaiste", "vitrailliste", "ferronnier", "vannier", "potier", "souffleur", "ciseleur",

    // Gastronomie mondiale
    "sushi", "paella", "couscous", "tajine", "risotto", "lasagne", "moussaka", "falafel", "hummus", "guacamole",
    "curry", "ramen", "tempura", "kebab", "goulash", "choucroute", "cassoulet", "bouillabaisse", "raclette", "fondue",
    "tiramisu", "baklava", "churros", "gaufre", "macaron", "eclair", "millefeuille", "sachertorte", "pavlova",

    // Danse et chorégraphie
    "ballet", "contemporain", "moderne", "jazz", "flamenco", "tango", "salsa", "samba", "valse", "polka",
    "breakdance", "capoeira", "bollywood", "charleston", "quickstep", "rumba", "mambo", "merengue", "zumba", "swing",

    // Mode et couture
    "haute-couture", "pret-a-porter", "collection", "mannequin", "styliste", "createur", "broderie", "dentelle",
    "soierie", "velours", "mousseline", "taffetas", "cachemire", "tweed", "gabardine", "popeline", "percale", "satin",

    // Sports extrêmes
    "parapente", "deltaplane", "wingsuit", "kitesurf", "wakeboard", "snowkite", "speedriding", "canyoning",
    "speleologie", "alpinisme", "parkour", "skatecross", "motocross", "rallycross", "barefoot", "highline",

    // Civilisations anciennes
    "mesopotamie", "babylone", "assyrie", "carthage", "sparte", "mycenes", "minoens", "etrusques", "celtes",
    "vikings", "aztèques", "incas", "mayas", "olmèques", "pharaon", "empereur", "dynastie", "pyramide", "ziggourat",

    // Inventions et découvertes
    "telescope", "microscope", "boussole", "imprimerie", "locomotive", "telephone", "telegraphe", "transistor",
    "penicilline", "vaccination", "electricite", "radioactivite", "relativite", "genetique", "clonage", "laser",

    // Jardinage et horticulture
    "permaculture", "hydroponique", "aquaponie", "compostage", "marcottage", "bouturage", "greffage", "rempotage",
    "taille", "tuteurage", "paillage", "fertilisation", "germination", "floraison", "pollinisation", "hybridation",

    // Artisanat traditionnel
    "vannerie", "corderie", "maroquinerie", "chapellerie", "ganterie", "saboterie", "tonnellerie", "coutellerie",
    "dinanderie", "emaillerie", "passementerie", "plumasserie", "dentellerie", "marqueterie", "lutherie",

    // Phénomènes paranormaux
    "telepathie", "telekinesie", "precognition", "clairvoyance", "medium", "fantome", "poltergeist", "apparition",
    "levitation", "possession", "magnetisme", "divination", "voyance", "spiritisme", "paranormal", "surnaturel",

    // Architecture moderne
    "minimalisme", "brutalisme", "deconstructivisme", "metabolisme", "biomimetisme", "parametrisme", "modernisme",
    "postmoderne", "futurisme", "high-tech", "ecologique", "bioclimatique", "organique", "modulaire", "geodesique",

    // Langues et linguistique
    "phonetique", "syntaxe", "semantique", "etymologie", "morphologie", "lexicologie", "dialecte", "idiome",
    "prosodie", "grammaire", "conjugaison", "declinaison", "phonologie", "pragmatique", "sociolinguistique",

    // Techniques de combat
    "aikido", "krav-maga", "systema", "wing-chun", "capoeira", "silat", "kali", "jeet-kune-do", "ninjutsu",
    "kung-fu", "taekwondo", "kickboxing", "muay-thai", "sambo", "pancrace", "savate", "lutte", "escrime",

    // Métiers du futur
    "cryptographe", "biohacker", "nanochirurgien", "cyberdetective", "terraformeur", "geneticien", "roboticien",
    "biomimetiste", "climatologue", "exobiologiste", "telepathologue", "memorialiste", "ethicien", "holographiste",

    // Instruments scientifiques
    "spectrometre", "oscilloscope", "chromatographe", "centrifugeuse", "magnetometre", "sismographe", "theodolite",
    "polarimetre", "calorimeter", "dynamometre", "viscosimetre", "interferometre", "diffractometre", "radiometre",

    // Mythologie nordique
    "yggdrasil", "midgard", "asgard", "valhalla", "bifrost", "ragnarok", "fenrir", "jormungandr", "sleipnir",
    "valkyrie", "nornes", "vanir", "alfheim", "niflheim", "muspellheim", "helheim", "svartalfheim", "nidavellir",

    // Paléontologie
    "dinosaure", "fossile", "archeopteryx", "pterodactyle", "velociraptor", "triceratops", "stegosaure",
    "brachiosaurus", "tyrannosaurus", "diplodocus", "megalosaure", "allosaure", "ankylosaurus", "spinosaurus",

    // Art numérique
    "pixel-art", "vectoriel", "modelisation", "animation", "rendu", "texturing", "rigging", "compositing",
    "retouche", "infographie", "webdesign", "motion-design", "mapping", "glitch-art", "generatif", "fractale",

    // Cosmétique et bien-être
    "aromatherapie", "reflexologie", "acupuncture", "osteopathie", "naturopathie", "homeopathie", "phytotherapie",
    "thalassotherapie", "balneotherapie", "sophrologie", "meditation", "relaxation", "shiatsu", "reiki", "ayurveda"
];

export default words;
