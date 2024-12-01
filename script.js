const words = [
    // Animaux
    "CHAT", "CHIEN", "LION", "TIGRE", "ELEPHANT", "GIRAFE", "ZEBRE", "SINGE", "KANGOUROU", "RHINOCEROS",
    "HIPPOPOTAME", "CROCODILE", "TORTUE", "PINGOUIN", "DAUPHIN", "BALEINE", "REQUIN", "LOUTRE", "PANDA",
    "KOALA", "JAGUAR", "PANTHERE", "GAZELLE", "ANTILOPE", "CHAMEAU", "DROMADAIRE", "PERROQUET", "AIGLE",
    "FAUCON", "HIBOU", "CHOUETTE", "COLIBRI", "FLAMANT", "PELICAN", "AUTRUCHE", "PAON", "CYGNE",

    // Nature
    "ARBRE", "FLEUR", "FORET", "MONTAGNE", "RIVIERE", "OCEAN", "PLAGE", "DESERT", "VOLCAN", "CASCADE",
    "GLACIER", "PRAIRIE", "COLLINE", "VALLEE", "PLATEAU", "JUNGLE", "SAVANE", "OASIS", "GEYSER", "CANYON",
    "GROTTE", "FALAISE", "DUNE", "LAGON", "RECIF", "ARCHIPEL", "FJORD", "DELTA", "MANGROVE",

    // Fruits et Légumes
    "POMME", "POIRE", "BANANE", "ORANGE", "CITRON", "FRAISE", "FRAMBOISE", "CERISE", "PECHE", "ABRICOT",
    "RAISIN", "MANGUE", "ANANAS", "KIWI", "PASTEQUE", "MELON", "TOMATE", "CAROTTE", "POIREAU", "OIGNON",
    "COURGETTE", "AUBERGINE", "BROCOLI", "CHOUFLEUR", "EPINARD", "HARICOT", "POTIRON", "CITROUILLE",

    // Sports
    "FOOTBALL", "TENNIS", "BASKETBALL", "VOLLEYBALL", "HANDBALL", "RUGBY", "HOCKEY", "NATATION", "ATHLETISME",
    "GYMNASTIQUE", "CYCLISME", "ESCALADE", "PLONGEE", "EQUITATION", "JUDO", "KARATE", "BOXE", "ESCRIME",
    "PATINAGE", "AVIRON", "VOILE", "SURF", "SKATEBOARD", "SNOWBOARD", "PETANQUE",

    // Métiers
    "MEDECIN", "PROFESSEUR", "AVOCAT", "ARCHITECTE", "INGENIEUR", "POMPIER", "POLICIER", "BOULANGER",
    "CUISINIER", "MUSICIEN", "ARTISTE", "ECRIVAIN", "JOURNALISTE", "PHOTOGRAPHE", "PILOTE", "ASTRONAUTE",
    "VETERINAIRE", "JARDINIER", "PLOMBIER", "ELECTRICIEN", "MENUISIER", "COIFFEUR", "FACTEUR",

    // Vêtements
    "PANTALON", "CHEMISE", "ROBE", "JUPE", "MANTEAU", "CHAPEAU", "ECHARPE", "GANTS", "CHAUSSETTES",
    "CHAUSSURES", "BOTTES", "SANDALES", "CRAVATE", "CEINTURE", "PYJAMA", "MAILLOT", "IMPERMEABLE",

    // Maison
    "CUISINE", "SALON", "CHAMBRE", "BUREAU", "GARAGE", "JARDIN", "TERRASSE", "BALCON", "ESCALIER",
    "FENETRE", "PLAFOND", "PLANCHER", "ARMOIRE", "CANAPE", "FAUTEUIL", "TABOURET", "COMMODE", "PLACARD",

    // Transport
    "VOITURE", "AVION", "TRAIN", "BATEAU", "HELICOPTERE", "TRAMWAY", "AUTOBUS", "METRO", "BICYCLETTE",
    "MOTO", "CAMION", "TRACTEUR", "AMBULANCE", "TAXI", "FUSEE", "SOUCOUPE", "DIRIGEABLE",

    // Technologie
    "ORDINATEUR", "TELEPHONE", "TABLETTE", "TELEVISION", "INTERNET", "SATELLITE", "ROBOT", "DRONE",
    "CONSOLE", "CAMERA", "APPAREIL", "IMPRIMANTE", "CLAVIER", "SOURIS", "ECRAN", "ENCEINTE",

    // Instruments de musique
    "PIANO", "GUITARE", "VIOLON", "BATTERIE", "TROMPETTE", "SAXOPHONE", "FLUTE", "HARPE", "ACCORDEON",
    "CLARINETTE", "XYLOPHONE", "TAMBOUR", "TRIANGLE", "CYMBALE", "HARMONICA", "BANJO", "UKULELE",

    // Éléments et Phénomènes naturels
    "SOLEIL", "LUNE", "ETOILE", "PLANETE", "COMETE", "GALAXIE", "NUAGE", "ORAGE", "ECLAIR", "TONNERRE",
    "PLUIE", "NEIGE", "BROUILLARD", "VENT", "TEMPETE", "OURAGAN", "TORNADE", "AVALANCHE", "SEISME",

    // Aliments et Boissons
    "CHOCOLAT", "GATEAU", "BISCUIT", "BONBON", "CROISSANT", "BAGUETTE", "FROMAGE", "YAOURT", "GLACE",
    "CREPE", "PIZZA", "HAMBURGER", "SPAGHETTI", "SUSHI", "SALADE", "SOUPE", "SANDWICH", "OMELETTE",

    // Émotions et Sentiments
    "AMOUR", "JOIE", "BONHEUR", "TRISTESSE", "COLERE", "SURPRISE", "PEUR", "COURAGE", "ESPOIR",
    "PASSION", "JALOUSIE", "TENDRESSE", "AMITIE", "CONFIANCE", "PATIENCE", "SAGESSE", "SERENITE",

    // Objets du quotidien
    "LUNETTES", "MONTRE", "PARAPLUIE", "PORTEFEUILLE", "VALISE", "MIROIR", "BROSSE", "PEIGNE",
    "SERVIETTE", "COUSSIN", "COUVERTURE", "RIDEAU", "TAPIS", "CADRE", "HORLOGE", "REVEIL",

    // Lieux et Bâtiments
    "CHATEAU", "PALAIS", "MUSEE", "THEATRE", "CINEMA", "BIBLIOTHEQUE", "HOPITAL", "ECOLE", "UNIVERSITE",
    "RESTAURANT", "BOUTIQUE", "SUPERMARCHE", "PHARMACIE", "BOULANGERIE", "PATISSERIE", "LIBRAIRIE",

    // Art et Culture
    "PEINTURE", "SCULPTURE", "POESIE", "ROMAN", "THEATRE", "DANSE", "CINEMA", "MUSIQUE", "OPERA",
    "COMEDIE", "BALLET", "CIRQUE", "FESTIVAL", "CONCERT", "EXPOSITION", "SPECTACLE",

    // Mots abstraits et concepts
    "LIBERTE", "JUSTICE", "PAIX", "VERITE", "BEAUTE", "TEMPS", "ESPACE", "HISTOIRE", "AVENIR",
    "SCIENCE", "NATURE", "CULTURE", "PROGRES", "SUCCES", "VICTOIRE", "MIRACLE", "MYSTERE"
];

class HangmanGame {
    constructor() {
        this.canvas = document.getElementById('hangman');
        this.ctx = this.canvas.getContext('2d');
        this.wordDisplay = document.getElementById('word-display');
        this.message = document.getElementById('message');
        this.essaisRestants = document.getElementById('essais-restants');
        this.newGameBtn = document.getElementById('new-game-btn');
        this.keyboard = document.querySelectorAll('.keyboard button');
        
        this.difficulty = localStorage.getItem('difficulty') || 'normal';
        this.maxTries = this.getMaxTriesByDifficulty();
        
        this.initializeSettings();
        
        this.setupEventListeners();
        this.startNewGame();
    }

    getMaxTriesByDifficulty() {
        switch(this.difficulty) {
            case 'easy': return 8;
            case 'hard': return 4;
            default: return 6; // normal
        }
    }

    initializeSettings() {
        // Dark mode initialization
        const darkModeToggle = document.getElementById('darkmode-toggle');
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        darkModeToggle.checked = isDarkMode;

        darkModeToggle.addEventListener('change', () => {
            document.documentElement.setAttribute('data-theme', darkModeToggle.checked ? 'dark' : 'light');
            localStorage.setItem('darkMode', darkModeToggle.checked);
        });

        // Difficulty initialization
        const difficultySelect = document.getElementById('difficulty-select');
        difficultySelect.value = this.difficulty;
        
        difficultySelect.addEventListener('change', () => {
            this.difficulty = difficultySelect.value;
            localStorage.setItem('difficulty', this.difficulty);
            this.maxTries = this.getMaxTriesByDifficulty();
            this.resetGame();
        });

        // Settings menu toggle
        const settingsBtn = document.getElementById('settings-btn');
        const settingsMenu = document.getElementById('settings-menu');

        settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Empêche la propagation du clic
            const isHidden = settingsMenu.style.display === 'none';
            settingsMenu.style.display = isHidden ? 'block' : 'none';
        });

        // Click outside to close settings
        document.addEventListener('click', (e) => {
            if (!settingsMenu.contains(e.target) && !settingsBtn.contains(e.target)) {
                settingsMenu.style.display = 'none';
            }
        });
    }

    resetGame() {
        // Reset game state with new difficulty
        this.remainingAttempts = this.maxTries;
        this.gameOver = false;
        this.guessedLetters = new Set();
        this.word = words[Math.floor(Math.random() * words.length)];
        this.updateDisplay();
        this.clearCanvas();
        this.drawGallows();
        
        // Reset keyboard
        this.keyboard.forEach(button => {
            button.disabled = false;
            button.classList.remove('correct', 'wrong');
        });
    }

    setupEventListeners() {
        this.keyboard.forEach(button => {
            button.addEventListener('click', () => this.guessLetter(button.textContent));
        });

        this.newGameBtn.addEventListener('click', () => this.startNewGame());

        document.addEventListener('keydown', (e) => {
            if (/^[A-Z]$/i.test(e.key)) {
                this.guessLetter(e.key.toUpperCase());
            }
        });
    }

    startNewGame() {
        this.word = words[Math.floor(Math.random() * words.length)];
        this.guessedLetters = new Set();
        this.remainingAttempts = this.maxTries;
        this.gameOver = false;

        this.keyboard.forEach(button => {
            button.disabled = false;
            button.classList.remove('correct', 'wrong');
        });

        this.updateDisplay();
        this.clearCanvas();
        this.drawGallows();
    }

    updateDisplay() {
        this.wordDisplay.innerHTML = this.word
            .split('')
            .map(letter => `<span class="${this.guessedLetters.has(letter) ? 'found' : ''}">${this.guessedLetters.has(letter) ? letter : '_'}</span>`)
            .join('');

        this.essaisRestants.textContent = `Essais restants: ${this.remainingAttempts}`;
        
        if (this.gameOver) {
            if (this.hasWon()) {
                this.message.textContent = '🎉 Félicitations ! Vous avez gagné !';
                this.message.style.color = 'var(--success-color)';
            } else {
                this.message.textContent = `💔 Perdu ! Le mot était : ${this.word}`;
                this.message.style.color = 'var(--error-color)';
            }
        } else {
            this.message.textContent = '';
        }
    }

    guessLetter(letter) {
        if (this.gameOver || this.guessedLetters.has(letter)) return;

        this.guessedLetters.add(letter);
        const button = Array.from(this.keyboard).find(btn => btn.textContent === letter);

        if (this.word.includes(letter)) {
            if (button) button.classList.add('correct');
        } else {
            if (button) button.classList.add('wrong');
            this.remainingAttempts--;
            this.drawHangman(this.maxTries - this.remainingAttempts);
        }

        if (button) button.disabled = true;

        this.checkGameEnd();
        this.updateDisplay();
    }

    hasWon() {
        return this.word.split('').every(letter => this.guessedLetters.has(letter));
    }

    checkGameEnd() {
        if (this.hasWon() || this.remainingAttempts === 0) {
            this.gameOver = true;
            this.keyboard.forEach(button => button.disabled = true);
        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawGallows() {
        this.ctx.strokeStyle = '#1e293b';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();

        // Base
        this.ctx.moveTo(50, 250);
        this.ctx.lineTo(250, 250);

        // Poteau vertical
        this.ctx.moveTo(100, 250);
        this.ctx.lineTo(100, 50);

        // Poutre horizontale
        this.ctx.moveTo(100, 50);
        this.ctx.lineTo(200, 50);

        // Corde
        this.ctx.moveTo(200, 50);
        this.ctx.lineTo(200, 80);

        this.ctx.stroke();
    }

    drawHangman(step) {
        this.ctx.strokeStyle = '#1e293b';
        this.ctx.lineWidth = 4;
        this.ctx.lineCap = 'round';

        switch(step) {
            case 1: // Tête
                this.ctx.beginPath();
                this.ctx.arc(200, 100, 20, 0, Math.PI * 2);
                this.ctx.stroke();
                break;
            
            case 2: // Corps
                this.ctx.beginPath();
                this.ctx.moveTo(200, 120);
                this.ctx.lineTo(200, 180);
                this.ctx.stroke();
                break;
            
            case 3: // Bras gauche
                this.ctx.beginPath();
                this.ctx.moveTo(200, 140);
                this.ctx.lineTo(170, 160);
                this.ctx.stroke();
                break;
            
            case 4: // Bras droit
                this.ctx.beginPath();
                this.ctx.moveTo(200, 140);
                this.ctx.lineTo(230, 160);
                this.ctx.stroke();
                break;
            
            case 5: // Jambe gauche
                this.ctx.beginPath();
                this.ctx.moveTo(200, 180);
                this.ctx.lineTo(170, 210);
                this.ctx.stroke();
                break;
            
            case 6: // Jambe droite
                this.ctx.beginPath();
                this.ctx.moveTo(200, 180);
                this.ctx.lineTo(230, 210);
                this.ctx.stroke();

                // Visage triste
                this.ctx.beginPath();
                this.ctx.arc(200, 100, 20, 0, Math.PI * 2);
                this.ctx.stroke();
                
                // Yeux X
                this.ctx.beginPath();
                this.ctx.moveTo(190, 95);
                this.ctx.lineTo(195, 100);
                this.ctx.moveTo(195, 95);
                this.ctx.lineTo(190, 100);
                
                this.ctx.moveTo(205, 95);
                this.ctx.lineTo(210, 100);
                this.ctx.moveTo(210, 95);
                this.ctx.lineTo(205, 100);
                
                // Bouche triste
                this.ctx.beginPath();
                this.ctx.arc(200, 110, 8, Math.PI * 0.1, Math.PI * 0.9, true);
                this.ctx.stroke();
                break;
        }
    }
}

// Démarrer le jeu
document.addEventListener('DOMContentLoaded', () => {
    new HangmanGame();
});
