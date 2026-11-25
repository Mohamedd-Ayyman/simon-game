<div align="center">

# 🟢🔴🟡🔵 Simon Game

**A browser remake of the classic Simon memory game, built with HTML, CSS and jQuery.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

</div>

---

## 📖 Overview

Simon shows you a sequence of coloured buttons and you have to repeat it from memory. Every round adds one more colour to the sequence. Get one wrong and the game is over.

## ✨ Features

- **Sequences that grow every level.** Each round adds one random colour to the pattern.
- **Audio and visual feedback.** Every colour has its own sound, and buttons flash when the game or the player presses them.
- **Answers checked as you play.** Each click is compared with the pattern straight away, and a wrong press triggers a game-over screen.
- **Quick restart.** Press any key to start a new game.
- **Retro look.** Uses the *Press Start 2P* arcade font.

## 🎮 How to Play

1. Open the game and **press any key** to start.
2. Watch the button that flashes and listen for its sound.
3. Click the buttons **in the same order** as the sequence so far.
4. Each correct round takes you to the next level. One mistake ends the game, and you can press any key to try again.

## 🚀 Getting Started

You don't need to build or install anything.

```bash
git clone https://github.com/Mohamedd-Ayyman/simon-game.git
cd simon-game
# open index.html in your browser
```

## 🗂️ Project Structure

```
simon-game/
├── index.html   # Game board markup
├── styles.css   # Layout, colours and press/game-over animations
└── game.js      # Game state, sequence generation, input handling and sounds
```

## 🧠 How It Works

| Function | Responsibility |
|---|---|
| `nextSequence()` | Adds a random colour to `gamePattern`, flashes it and moves up a level |
| `checkAnswer(level)` | Compares the player's latest click with the stored pattern |
| `playSound(name)` | Plays the sound for that colour |
| `animatePress(colour)` | Gives quick visual feedback when a button is clicked |

## 👤 Author

**Mohamed Ayman** · [GitHub](https://github.com/Mohamedd-Ayyman)
