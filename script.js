import words from './words.js';

// Fonction pour obtenir tous les mots d'une difficulté donnée
function getWordsByDifficulty(difficulty) {
    const allWords = [];
    Object.entries(words).forEach(([category, categoryWords]) => {
        if (categoryWords[difficulty]) {
            categoryWords[difficulty].forEach(word => {
                allWords.push({
                    word: word,
                    category: category
                });
            });
        }
    });
    return allWords.map(item => ({
        word: item.word.toUpperCase(),
        category: item.category
    }));
}

class HangmanGame {
    constructor() {
        this.canvas = document.getElementById('hangman');
        this.ctx = this.canvas.getContext('2d');
        this.wordDisplay = document.getElementById('word-display');
        this.message = document.getElementById('message');
        this.essaisRestants = document.getElementById('essais-restants');
        this.newGameBtn = document.getElementById('new-game-btn');
        this.keyboard = document.querySelectorAll('.keyboard button');
        this.categoryDisplay = document.getElementById('category-display');
        
        this.difficulty = localStorage.getItem('difficulty') || 'normal';
        this.maxTries = this.getMaxTriesByDifficulty();
        
        // Appliquer la difficulté initiale au body
        document.body.setAttribute('data-difficulty', this.difficulty);
        
        this.initializeSettings();
        this.initializeStats();
        
        this.setupEventListeners();
        this.startNewGame();
    }

    getMaxTriesByDifficulty() {
        switch(this.difficulty) {
            case 'kids': return 10;
            case 'easy': return 8;
            case 'hard': return 4;
            default: return 6; // normal
        }
    }

    getDifficultyMapping() {
        return {
            'kids': 'enfant',
            'easy': 'facile',
            'normal': 'normal',
            'hard': 'difficile'
        };
    }

    formatCategoryName(category) {
        const categoryMappings = {
            'animauxCommuns': 'Animaux',
            'fruitsEtLegumesCommuns': 'Fruits et Légumes',
            'vetements': 'Vêtements',
            'meubles': 'Meubles',
            'transports': 'Transports',
            'couleurs': 'Couleurs',
            'corps': 'Parties du Corps'
        };
        return categoryMappings[category] || category;
    }

    getRandomWord() {
        const difficultyMapping = this.getDifficultyMapping();
        const wordList = getWordsByDifficulty(difficultyMapping[this.difficulty]);
        if (wordList.length === 0) {
            console.warn(`No words found for difficulty: ${this.difficulty}`);
            return getWordsByDifficulty('normal')[Math.floor(Math.random() * getWordsByDifficulty('normal').length)];
        }
        const selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
        return selectedWord;
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
            this.updateStatsDisplay(this.difficulty);
            
            // Mettre à jour l'attribut data-difficulty du body
            document.body.setAttribute('data-difficulty', this.difficulty);
            
            document.querySelectorAll('.tab-btn').forEach(btn => {
                if (btn.dataset.difficulty === this.difficulty) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            this.startNewGame(); // Lancer une nouvelle partie immédiatement
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

        // Reset stats button initialization
        const resetStatsBtn = document.getElementById('reset-stats-btn');
        resetStatsBtn.addEventListener('click', () => {
            if (confirm('Êtes-vous sûr de vouloir réinitialiser toutes les statistiques ? Cette action est irréversible.')) {
                this.resetAllStats();
            }
        });
    }

    initializeStats() {
        // Structure des statistiques par difficulté
        const defaultStats = {
            gamesPlayed: 0,
            gamesWon: 0,
            currentStreak: 0,
            bestStreak: 0
        };

        // Initialiser ou charger les stats pour chaque difficulté
        this.stats = {
            kids: JSON.parse(localStorage.getItem('stats_kids')) || {...defaultStats},
            easy: JSON.parse(localStorage.getItem('stats_easy')) || {...defaultStats},
            normal: JSON.parse(localStorage.getItem('stats_normal')) || {...defaultStats},
            hard: JSON.parse(localStorage.getItem('stats_hard')) || {...defaultStats}
        };

        // Initialiser les onglets de difficulté
        this.initializeStatsTabs();
        
        // Afficher les stats de la difficulté actuelle
        this.updateStatsDisplay();
    }

    initializeStatsTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Retirer la classe active de tous les boutons
                tabButtons.forEach(b => b.classList.remove('active'));
                // Ajouter la classe active au bouton cliqué
                btn.classList.add('active');
                // Mettre à jour l'affichage des stats pour la difficulté sélectionnée
                this.updateStatsDisplay(btn.dataset.difficulty);
            });
        });
    }

    updateStatsDisplay(difficulty = null) {
        // Utiliser la difficulté passée en paramètre ou la difficulté actuelle du jeu
        const currentDifficulty = difficulty || this.difficulty;
        const stats = this.stats[currentDifficulty];

        document.getElementById('games-played').textContent = stats.gamesPlayed;
        document.getElementById('games-won').textContent = stats.gamesWon;
        const winPercentage = stats.gamesPlayed > 0 
            ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) 
            : 0;
        document.getElementById('win-percentage').textContent = `${winPercentage}%`;
        document.getElementById('current-streak').textContent = stats.currentStreak;
        document.getElementById('best-streak').textContent = stats.bestStreak;

        // Mettre à jour l'onglet actif
        document.querySelectorAll('.tab-btn').forEach(btn => {
            if (btn.dataset.difficulty === currentDifficulty) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    updateStats(won) {
        const stats = this.stats[this.difficulty];
        stats.gamesPlayed++;
        
        if (won) {
            stats.gamesWon++;
            stats.currentStreak++;
            if (stats.currentStreak > stats.bestStreak) {
                stats.bestStreak = stats.currentStreak;
            }
        } else {
            stats.currentStreak = 0;
        }

        // Sauvegarder les stats dans localStorage
        localStorage.setItem(`stats_${this.difficulty}`, JSON.stringify(stats));

        // Mettre à jour l'affichage
        this.updateStatsDisplay();
    }

    resetAllStats() {
        const defaultStats = {
            gamesPlayed: 0,
            gamesWon: 0,
            currentStreak: 0,
            bestStreak: 0
        };

        // Réinitialiser les stats pour chaque difficulté
        this.stats = {
            kids: {...defaultStats},
            easy: {...defaultStats},
            normal: {...defaultStats},
            hard: {...defaultStats}
        };

        // Supprimer les anciennes stats du localStorage
        localStorage.removeItem('stats_kids');
        localStorage.removeItem('stats_easy');
        localStorage.removeItem('stats_normal');
        localStorage.removeItem('stats_hard');

        // Mettre à jour l'affichage
        this.updateStatsDisplay();
    }

    resetGame() {
        // Reset game state with new difficulty
        this.remainingAttempts = this.maxTries;
        this.gameOver = false;
        this.guessedLetters = new Set();
        const wordData = this.getRandomWord();
        this.word = wordData.word;
        this.category = wordData.category;
        this.updateDisplay();
        this.clearCanvas();
        this.drawGallows();
        
        // Reset keyboard
        this.keyboard.forEach(button => {
            button.disabled = false;
            button.classList.remove('correct', 'incorrect', 'wrong');
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
        const wordData = this.getRandomWord();
        this.word = wordData.word;
        this.category = wordData.category;
        this.guessedLetters = new Set();
        this.remainingAttempts = this.maxTries;
        this.gameOver = false;

        this.keyboard.forEach(button => {
            button.disabled = false;
            button.classList.remove('correct', 'incorrect', 'wrong');
        });

        // Afficher la catégorie seulement en mode enfant
        if (this.difficulty === 'kids') {
            this.categoryDisplay.textContent = `Thème : ${this.formatCategoryName(this.category)}`;
            this.categoryDisplay.style.display = 'block';
        } else {
            this.categoryDisplay.style.display = 'none';
        }

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
            if (button) button.classList.add('incorrect');
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
            this.updateStats(this.hasWon());
        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawGallows() {
        // Style moderne et épuré
        this.ctx.strokeStyle = 'var(--text-color)';
        this.ctx.lineWidth = 3;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';

        // Structure simplifiée
        this.ctx.beginPath();
        // Base avec léger arc
        this.ctx.moveTo(70, 250);
        this.ctx.quadraticCurveTo(150, 245, 230, 250);
        
        // Poteau vertical avec légère courbe
        this.ctx.moveTo(120, 250);
        this.ctx.bezierCurveTo(120, 180, 115, 100, 120, 50);
        
        // Poutre horizontale
        this.ctx.moveTo(120, 50);
        this.ctx.bezierCurveTo(140, 45, 180, 45, 200, 50);
        
        // Corde stylisée
        this.ctx.moveTo(200, 50);
        this.ctx.bezierCurveTo(200, 55, 203, 65, 200, 70);
        
        this.ctx.stroke();
    }

    drawHangman(step) {
        this.ctx.strokeStyle = 'var(--text-color)';
        this.ctx.lineWidth = 3;
        this.ctx.lineCap = 'round';

        switch(step) {
            case 1: // Tête stylisée
                this.ctx.beginPath();
                // Tête légèrement ovale
                this.ctx.ellipse(200, 90, 15, 18, 0, 0, Math.PI * 2);
                this.ctx.stroke();
                break;
            
            case 2: // Corps avec courbe naturelle
                this.ctx.beginPath();
                this.ctx.moveTo(200, 108);
                this.ctx.bezierCurveTo(200, 130, 195, 150, 200, 170);
                this.ctx.stroke();
                break;
            
            case 3: // Bras gauche dynamique
                this.ctx.beginPath();
                this.ctx.moveTo(200, 125);
                this.ctx.bezierCurveTo(190, 135, 175, 140, 165, 145);
                this.ctx.stroke();
                break;
            
            case 4: // Bras droit dynamique
                this.ctx.beginPath();
                this.ctx.moveTo(200, 125);
                this.ctx.bezierCurveTo(210, 135, 225, 140, 235, 145);
                this.ctx.stroke();
                break;
            
            case 5: // Jambe gauche dynamique
                this.ctx.beginPath();
                this.ctx.moveTo(200, 170);
                this.ctx.bezierCurveTo(195, 190, 185, 200, 175, 210);
                this.ctx.stroke();
                break;
            
            case 6: // Jambe droite et expression
                this.ctx.beginPath();
                this.ctx.moveTo(200, 170);
                this.ctx.bezierCurveTo(205, 190, 215, 200, 225, 210);
                this.ctx.stroke();

                // Expression faciale minimaliste
                this.ctx.beginPath();
                // Yeux fermés en croix
                this.ctx.moveTo(190, 85);
                this.ctx.lineTo(197, 90);
                this.ctx.moveTo(197, 85);
                this.ctx.lineTo(190, 90);

                this.ctx.moveTo(203, 85);
                this.ctx.lineTo(210, 90);
                this.ctx.moveTo(210, 85);
                this.ctx.lineTo(203, 90);

                // Bouche triste minimaliste
                this.ctx.moveTo(192, 98);
                this.ctx.quadraticCurveTo(200, 93, 208, 98);
                
                this.ctx.stroke();
                break;
        }
    }
}

// Démarrer le jeu
document.addEventListener('DOMContentLoaded', () => {
    new HangmanGame();
});
