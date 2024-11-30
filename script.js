// Liste de mots français
const MOTS = [
    "maison", "voiture", "ordinateur", "telephone", "chat", "chien", "livre",
    "table", "chaise", "fenetre", "porte", "jardin", "cuisine", "chambre",
    "ecole", "travail", "musique", "cinema", "restaurant", "voyage"
];

let currentWord = '';
let guessedLetters = new Set();
let remainingAttempts = 6;
let gameOver = false;

function startNewGame() {
    // Choisir un mot aléatoire
    currentWord = MOTS[Math.floor(Math.random() * MOTS.length)];
    
    // Réinitialiser le jeu
    guessedLetters.clear();
    remainingAttempts = 6;
    gameOver = false;
    
    // Mettre à jour l'affichage
    document.getElementById('essais-restants').style.display = 'block';
    updateDisplay();
    resetButtons();
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = remainingAttempts;
    
    // Réinitialiser le dessin du pendu
    drawHangman();
}

function updateDisplay() {
    const wordDisplay = document.getElementById('word-display');
    if (gameOver) {
        // Afficher le mot avec les lettres en couleur
        wordDisplay.innerHTML = currentWord
            .split('')
            .map(letter => {
                const found = guessedLetters.has(letter);
                return `<span class="${found ? 'found' : 'not-found'}">${letter}</span>`;
            })
            .join('');
    } else {
        // Affichage normal pendant le jeu
        wordDisplay.innerHTML = currentWord
            .split('')
            .map(letter => guessedLetters.has(letter) ? letter : '_')
            .join(' ');
    }
}

function guessLetter(letter) {
    if (gameOver || guessedLetters.has(letter.toLowerCase())) return;

    letter = letter.toLowerCase();
    guessedLetters.add(letter);

    // Mise à jour du bouton
    const buttons = document.querySelectorAll('.keyboard button');
    buttons.forEach(button => {
        if (button.textContent === letter.toUpperCase()) {
            button.disabled = true;
        }
    });

    // Vérifier si la lettre est dans le mot
    if (!currentWord.includes(letter)) {
        remainingAttempts--;
        document.getElementById('attempts').textContent = remainingAttempts;
        drawHangman();
    }

    updateDisplay();
    checkGameStatus();
}

function checkGameStatus() {
    const wordComplete = currentWord
        .split('')
        .every(letter => guessedLetters.has(letter));

    if (wordComplete) {
        gameOver = true;
        document.getElementById('message').textContent = 'Félicitations ! Vous avez gagné !';
        document.getElementById('message').style.color = '#34a853';
        document.getElementById('essais-restants').style.display = 'none';
    } else if (remainingAttempts <= 0) {
        gameOver = true;
        document.getElementById('message').textContent = 'Perdu !';
        document.getElementById('message').style.color = '#d93025';
        document.getElementById('essais-restants').style.display = 'none';
    }
    
    updateDisplay();
}

function resetButtons() {
    document.querySelectorAll('.keyboard button').forEach(button => {
        button.disabled = false;
    });
}

function drawHangman() {
    const canvas = document.getElementById('hangmanCanvas');
    const ctx = canvas.getContext('2d');
    
    // Définir une taille plus grande pour le canvas
    canvas.width = 300;
    canvas.height = 350;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Style moderne
    ctx.strokeStyle = '#4a5568';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Base avec une ombre
    ctx.beginPath();
    ctx.moveTo(50, 300);
    ctx.lineTo(250, 300);
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetY = 5;
    ctx.stroke();
    
    // Réinitialiser l'ombre pour les autres éléments
    ctx.shadowColor = 'transparent';
    
    // Poteau vertical avec gradient
    const gradient = ctx.createLinearGradient(70, 300, 70, 50);
    gradient.addColorStop(0, '#4a5568');
    gradient.addColorStop(1, '#718096');
    ctx.strokeStyle = gradient;
    
    ctx.beginPath();
    ctx.moveTo(70, 300);
    ctx.lineTo(70, 50);
    ctx.stroke();

    // Poteau horizontal
    ctx.beginPath();
    ctx.moveTo(70, 50);
    ctx.lineTo(175, 50);
    ctx.stroke();

    // Corde avec style différent
    ctx.strokeStyle = '#805ad5';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(175, 50);
    ctx.lineTo(175, 80);
    ctx.stroke();

    const maxAttempts = 6;
    const partsToShow = maxAttempts - remainingAttempts;

    // Style pour le personnage
    ctx.strokeStyle = '#2d3748';
    ctx.lineWidth = 4;

    // Tête
    if (partsToShow >= 1) {
        ctx.beginPath();
        ctx.arc(175, 110, 30, 0, Math.PI * 2);
        // Visage stylisé
        if (partsToShow === 6) { // Uniquement quand perdu
            // Yeux X
            ctx.moveTo(165, 100);
            ctx.lineTo(175, 110);
            ctx.moveTo(175, 100);
            ctx.lineTo(165, 110);
            
            ctx.moveTo(185, 100);
            ctx.lineTo(195, 110);
            ctx.moveTo(195, 100);
            ctx.lineTo(185, 110);
            
            // Bouche triste
            ctx.moveTo(165, 125);
            ctx.quadraticCurveTo(175, 115, 185, 125);
        } else {
            // Yeux normaux
            ctx.moveTo(165, 105);
            ctx.lineTo(175, 105);
            ctx.moveTo(185, 105);
            ctx.lineTo(195, 105);
            
            // Bouche neutre
            ctx.moveTo(170, 120);
            ctx.lineTo(180, 120);
        }
        ctx.stroke();
    }

    // Corps avec courbe légère
    if (partsToShow >= 2) {
        ctx.beginPath();
        ctx.moveTo(175, 140);
        ctx.quadraticCurveTo(175, 180, 175, 220);
        ctx.stroke();
    }

    // Bras avec courbes naturelles
    if (partsToShow >= 3) {
        ctx.beginPath();
        ctx.moveTo(175, 160);
        ctx.quadraticCurveTo(145, 170, 135, 200);
        ctx.stroke();
    }

    if (partsToShow >= 4) {
        ctx.beginPath();
        ctx.moveTo(175, 160);
        ctx.quadraticCurveTo(205, 170, 215, 200);
        ctx.stroke();
    }

    // Jambes avec courbes naturelles
    if (partsToShow >= 5) {
        ctx.beginPath();
        ctx.moveTo(175, 220);
        ctx.quadraticCurveTo(145, 250, 135, 280);
        ctx.stroke();
    }

    if (partsToShow >= 6) {
        ctx.beginPath();
        ctx.moveTo(175, 220);
        ctx.quadraticCurveTo(205, 250, 215, 280);
        ctx.stroke();
    }
}

// Ajouter la prise en charge du clavier physique
document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase();
    if (/^[A-Z]$/.test(key)) {
        guessLetter(key);
    }
});

// Démarrer une nouvelle partie au chargement
window.onload = startNewGame;
