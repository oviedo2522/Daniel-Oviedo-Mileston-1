// Cards symbol//
let symbols = ['🐧', '🦊', '🦍', '🐶', '🦉', '🦝', '🐵', '🐸'];
let cards = [];
let flippedCards = [];
let matches = 0;

function shuffle(array) {
    let currentIndex = array.length, tempValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }
    return array;
}

function createBoard() {
    const board = document.getElementById("board");
    cards = shuffle([...symbols, ...symbols]);
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.dataset.symbol = cards[i];
      card.textContent = "❔";
      board.appendChild(card);
    }

    // Attach event listener to the board
    board.addEventListener("click", function (event) {
      const clickedElement = event.target;
      if (clickedElement.classList.contains("card")) {
        flipCard.call(clickedElement);
      }
    });
  }
// Function to flip cards palying game
function flipCard() {
    if (flippedCards.length < 2 && !flippedCards.includes(this)) {
        flippedCards.push(this);
        this.textContent = this.dataset.symbol;
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);
        matches++;
        if (matches === symbols.length) {
            alert('Congratulations! You matched all the pairs.');
        }
    } else {
        card1.textContent = '❔';
        card2.textContent = '❔';
    }
    flippedCards = [];
}
// Function to reset the game
function resetGame() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    matches = 0;
    createBoard();
}

document.getElementById('resetButton').addEventListener('click', resetGame);

createBoard();
