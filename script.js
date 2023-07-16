const cards = [
  { name: 'Dog', img: 'images/emojis/dog_1f415.png' },
  { name: 'Perro', img: 'images/emojis/dog_1f415.png' },
  { name: 'Cow', img: 'images/emojis/cow_1f404.png' },
  { name: 'Vaca', img: 'images/emojis/cow_1f404.png' },
  { name: 'Monkey', img: 'images/emojis/monkey_1f412.png' },
  { name: 'Mono', img: 'images/emojis/monkey_1f412.png' },
  { name: 'Chicken', img: 'images/emojis/chicken_1f414.png' },
  { name: 'Pollo', img: 'images/emojis/chicken_1f414.png' },
  { name: 'Rabbit', img: 'images/emojis/rabbit_1f407.png' },
  { name: 'Conejo', img: 'images/emojis/rabbit_1f407.png' },
  { name: 'Horse', img: 'images/emojis/horse_1f40e.png' },
  { name: 'Cabello', img: 'images/emojis/horse_1f40e.png' },
  { name: 'Bee', img: 'images/emojis/honeybee_1f41d.png' },
  { name: 'Abeja', img: 'images/emojis/honeybee_1f41d.png' },
  { name: 'Frog', img: 'images/emojis/frog_1f438.png' },
  { name: 'Rana', img: 'images/emojis/frog_1f438.png' },
  { name: 'Snail', img: 'images/emojis/snail_1f40c.png' },
  { name: 'Caracol', img: 'images/emojis/snail_1f40c.png' },
  { name: 'Snake', img: 'images/emojis/snake_1f40d.png' },
  { name: 'Serpiente', img: 'images/emojis/snake_1f40d.png' }
];

let clicks = 0;
let cardFlipped = [];
let isMatched = false;
let moves = 0;
let locked = false;

window.onload = function () {
  document.getElementById('my_audio').play();
}

function revertBack() {
  locked = true;
  setTimeout(() => {
    cardFlipped.forEach(card => {
      card.classList.remove('flipped');
      card.setAttribute('data-revealed', 'false');
    });
    cardFlipped = [];
    locked = false;
  }, 1000);
}

function checkMatch() {
  const [card1, card2] = cardFlipped;
  if (card1.dataset.name === card2.dataset.name) {
    cardFlipped = [];
    isMatched = true;
  } else {
    revertBack();
  }
}

function flipCard() {
  if (locked) return;

  if (this.dataset.revealed === 'false') {
    this.classList.add('flipped');
    this.setAttribute('data-revealed', 'true');
    cardFlipped.push(this);

    if (clicks === 0) {
      clicks++;
    } else {
      clicks = 0;
      moves++;
      checkMatch();
      updateMove();
    }
  }
}

function updateMove() {
  document.querySelector('.moves').textContent = moves;
}

function restart() {
  location.reload();
}

document.getElementById('restartButton').addEventListener('click', restart);

const cardsContainer = document.querySelector('#board');

function buildCard() {
  shuffleCards();
  for (let i = 0; i < cards.length; i++) {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');

    const cardFront = document.createElement('div');
    cardFront.classList.add('front');

    const cardBack = document.createElement('div');
    cardBack.classList.add('back');
    cardBack.style.backgroundImage = `url(${cards[i].img})`;

    const imageName = document.createElement('p');
    imageName.classList.add('imageName');
    imageName.textContent = cards[i].name;

    cardWrapper.appendChild(cardFront);
    cardWrapper.appendChild(cardBack);
    cardWrapper.appendChild(imageName);

    cardWrapper.setAttribute('data-name', cards[i].name);
    cardWrapper.setAttribute('data-revealed', 'false');
    cardWrapper.addEventListener('click', flipCard);

    cardsContainer.appendChild(cardWrapper);
  }
}

function shuffleCards() {
  let currentIndex = cards.length;
  let randomIndex;
  let temporaryValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

buildCard();
updateMove();
