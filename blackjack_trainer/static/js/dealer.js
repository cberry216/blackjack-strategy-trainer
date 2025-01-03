const cards = [
  { "card": "2", "suit": "S", "value": 2, "src": "/static/img/cards/2_of_spades.png", "name": "2" },
  { "card": "3", "suit": "S", "value": 3, "src": "/static/img/cards/3_of_spades.png", "name": "3" },
  { "card": "4", "suit": "S", "value": 4, "src": "/static/img/cards/4_of_spades.png", "name": "4" },
  { "card": "5", "suit": "S", "value": 5, "src": "/static/img/cards/5_of_spades.png", "name": "5" },
  { "card": "6", "suit": "S", "value": 6, "src": "/static/img/cards/6_of_spades.png", "name": "6" },
  { "card": "7", "suit": "S", "value": 7, "src": "/static/img/cards/7_of_spades.png", "name": "7" },
  { "card": "8", "suit": "S", "value": 8, "src": "/static/img/cards/8_of_spades.png", "name": "8" },
  { "card": "9", "suit": "S", "value": 9, "src": "/static/img/cards/9_of_spades.png", "name": "9" },
  { "card": "10", "suit": "S", "value": 10, "src": "/static/img/cards/10_of_spades.png", "name": "10" },
  { "card": "J", "suit": "S", "value": 10, "src": "/static/img/cards/jack_of_spades2.png", "name": "JACK" },
  { "card": "Q", "suit": "S", "value": 10, "src": "/static/img/cards/queen_of_spades2.png", "name": "QUEEN" },
  { "card": "K", "suit": "S", "value": 10, "src": "/static/img/cards/king_of_spades2.png", "name": "KING" },
  { "card": "A", "suit": "S", "value": 11, "src": "/static/img/cards/ace_of_spades.png", "name": "ACE" },
  { "card": "2", "suit": "C", "value": 2, "src": "/static/img/cards/2_of_clubs.png", "name": "2" },
  { "card": "3", "suit": "C", "value": 3, "src": "/static/img/cards/3_of_clubs.png", "name": "3" },
  { "card": "4", "suit": "C", "value": 4, "src": "/static/img/cards/4_of_clubs.png", "name": "4" },
  { "card": "5", "suit": "C", "value": 5, "src": "/static/img/cards/5_of_clubs.png", "name": "5" },
  { "card": "6", "suit": "C", "value": 6, "src": "/static/img/cards/6_of_clubs.png", "name": "6" },
  { "card": "7", "suit": "C", "value": 7, "src": "/static/img/cards/7_of_clubs.png", "name": "7" },
  { "card": "8", "suit": "C", "value": 8, "src": "/static/img/cards/8_of_clubs.png", "name": "8" },
  { "card": "9", "suit": "C", "value": 9, "src": "/static/img/cards/9_of_clubs.png", "name": "9" },
  { "card": "10", "suit": "C", "value": 10, "src": "/static/img/cards/10_of_clubs.png", "name": "10" },
  { "card": "J", "suit": "C", "value": 10, "src": "/static/img/cards/jack_of_clubs2.png", "name": "JACK" },
  { "card": "Q", "suit": "C", "value": 10, "src": "/static/img/cards/queen_of_clubs2.png", "name": "QUEEN" },
  { "card": "K", "suit": "C", "value": 10, "src": "/static/img/cards/king_of_clubs2.png", "name": "KING" },
  { "card": "A", "suit": "C", "value": 11, "src": "/static/img/cards/ace_of_clubs.png", "name": "ACE" },
  { "card": "2", "suit": "H", "value": 2, "src": "/static/img/cards/2_of_hearts.png", "name": "2" },
  { "card": "3", "suit": "H", "value": 3, "src": "/static/img/cards/3_of_hearts.png", "name": "3" },
  { "card": "4", "suit": "H", "value": 4, "src": "/static/img/cards/4_of_hearts.png", "name": "4" },
  { "card": "5", "suit": "H", "value": 5, "src": "/static/img/cards/5_of_hearts.png", "name": "5" },
  { "card": "6", "suit": "H", "value": 6, "src": "/static/img/cards/6_of_hearts.png", "name": "6" },
  { "card": "7", "suit": "H", "value": 7, "src": "/static/img/cards/7_of_hearts.png", "name": "7" },
  { "card": "8", "suit": "H", "value": 8, "src": "/static/img/cards/8_of_hearts.png", "name": "8" },
  { "card": "9", "suit": "H", "value": 9, "src": "/static/img/cards/9_of_hearts.png", "name": "9" },
  { "card": "10", "suit": "H", "value": 10, "src": "/static/img/cards/10_of_hearts.png", "name": "10" },
  { "card": "J", "suit": "H", "value": 10, "src": "/static/img/cards/jack_of_hearts2.png", "name": "JACK" },
  { "card": "Q", "suit": "H", "value": 10, "src": "/static/img/cards/queen_of_hearts2.png", "name": "QUEEN" },
  { "card": "K", "suit": "H", "value": 10, "src": "/static/img/cards/king_of_hearts2.png", "name": "KING" },
  { "card": "A", "suit": "H", "value": 11, "src": "/static/img/cards/ace_of_hearts.png", "name": "ACE" },
  { "card": "2", "suit": "D", "value": 2, "src": "/static/img/cards/2_of_diamonds.png", "name": "2" },
  { "card": "3", "suit": "D", "value": 3, "src": "/static/img/cards/3_of_diamonds.png", "name": "3" },
  { "card": "4", "suit": "D", "value": 4, "src": "/static/img/cards/4_of_diamonds.png", "name": "4" },
  { "card": "5", "suit": "D", "value": 5, "src": "/static/img/cards/5_of_diamonds.png", "name": "5" },
  { "card": "6", "suit": "D", "value": 6, "src": "/static/img/cards/6_of_diamonds.png", "name": "6" },
  { "card": "7", "suit": "D", "value": 7, "src": "/static/img/cards/7_of_diamonds.png", "name": "7" },
  { "card": "8", "suit": "D", "value": 8, "src": "/static/img/cards/8_of_diamonds.png", "name": "8" },
  { "card": "9", "suit": "D", "value": 9, "src": "/static/img/cards/9_of_diamonds.png", "name": "9" },
  { "card": "10", "suit": "D", "value": 10, "src": "/static/img/cards/10_of_diamonds.png", "name": "10" },
  { "card": "J", "suit": "D", "value": 10, "src": "/static/img/cards/jack_of_diamonds2.png", "name": "JACK" },
  { "card": "Q", "suit": "D", "value": 10, "src": "/static/img/cards/queen_of_diamonds2.png", "name": "QUEEN" },
  { "card": "K", "suit": "D", "value": 10, "src": "/static/img/cards/king_of_diamonds2.png", "name": "KING" },
  { "card": "A", "suit": "D", "value": 11, "src": "/static/img/cards/ace_of_diamonds.png", "name": "ACE" },
]

const moves = {
  "stand": "stand",
  "hit": "hit",
  "double": "double",
  "split": "split"
}

const hard_solution_matrix = {
  '5': {
    '2': moves.hit,
    '3': moves.hit,
    '4': moves.hit,
    '5': moves.hit,
    '6': moves.hit,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '6': {
    '2': moves.hit,
    '3': moves.hit,
    '4': moves.hit,
    '5': moves.hit,
    '6': moves.hit,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '7': {
    '2': moves.hit,
    '3': moves.hit,
    '4': moves.hit,
    '5': moves.hit,
    '6': moves.hit,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '8': {
    '2': moves.hit,
    '3': moves.hit,
    '4': moves.hit,
    '5': moves.hit,
    '6': moves.hit,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '9': {
    '2': moves.hit,
    '3': moves.double,
    '4': moves.double,
    '5': moves.double,
    '6': moves.double,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '10': {
    '2': moves.double,
    '3': moves.double,
    '4': moves.double,
    '5': moves.double,
    '6': moves.double,
    '7': moves.double,
    '8': moves.double,
    '9': moves.double,
    '10': moves.hit,
    '11': moves.hit,
  },
  '11': {
    '2': moves.double,
    '3': moves.double,
    '4': moves.double,
    '5': moves.double,
    '6': moves.double,
    '7': moves.double,
    '8': moves.double,
    '9': moves.double,
    '10': moves.double,
    '11': moves.hit,
  },
  '12': {
    '2': moves.hit,
    '3': moves.hit,
    '4': moves.stand,
    '5': moves.stand,
    '6': moves.stand,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '13': {
    '2': moves.stand,
    '3': moves.stand,
    '4': moves.stand,
    '5': moves.stand,
    '6': moves.stand,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '14': {
    '2': moves.stand,
    '3': moves.stand,
    '4': moves.stand,
    '5': moves.stand,
    '6': moves.stand,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '15': {
    '2': moves.stand,
    '3': moves.stand,
    '4': moves.stand,
    '5': moves.stand,
    '6': moves.stand,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '16': {
    '2': moves.stand,
    '3': moves.stand,
    '4': moves.stand,
    '5': moves.stand,
    '6': moves.stand,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '17': {
    '2': moves.stand,
    '3': moves.stand,
    '4': moves.stand,
    '5': moves.stand,
    '6': moves.stand,
    '7': moves.stand,
    '8': moves.stand,
    '9': moves.stand,
    '10': moves.stand,
    '11': moves.stand,
  },
  '18': {
    '2': moves.stand,
    '3': moves.stand,
    '4': moves.stand,
    '5': moves.stand,
    '6': moves.stand,
    '7': moves.stand,
    '8': moves.stand,
    '9': moves.stand,
    '10': moves.stand,
    '11': moves.stand,
  },
  '19': {
    '2': moves.stand,
    '3': moves.stand,
    '4': moves.stand,
    '5': moves.stand,
    '6': moves.stand,
    '7': moves.stand,
    '8': moves.stand,
    '9': moves.stand,
    '10': moves.stand,
    '11': moves.stand,
  },
  '20': {
    '2': moves.stand,
    '3': moves.stand,
    '4': moves.stand,
    '5': moves.stand,
    '6': moves.stand,
    '7': moves.stand,
    '8': moves.stand,
    '9': moves.stand,
    '10': moves.stand,
    '11': moves.stand,
  },
}

const soft_solution_matrix = {
  '2': {
    '2': moves.hit,
    '3': moves.hit,
    '4': moves.hit,
    '5': moves.double,
    '6': moves.double,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '3': {
    '2': moves.hit,
    '3': moves.hit,
    '4': moves.hit,
    '5': moves.double,
    '6': moves.double,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '4': {
    '2': moves.hit,
    '3': moves.hit,
    '4': moves.double,
    '5': moves.double,
    '6': moves.double,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '5': {
    '2': moves.hit,
    '3': moves.hit,
    '4': moves.double,
    '5': moves.double,
    '6': moves.double,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '6': {
    '2': moves.hit,
    '3': moves.double,
    '4': moves.double,
    '5': moves.double,
    '6': moves.double,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '7': {
    '2': moves.stand,
    '3': moves.stand,
    '4': moves.stand,
    '5': moves.stand,
    '6': moves.stand,
    '7': moves.stand,
    '8': moves.stand,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '8': {
    '2': moves.stand,
    '3': moves.stand,
    '4': moves.stand,
    '5': moves.stand,
    '6': moves.stand,
    '7': moves.stand,
    '8': moves.stand,
    '9': moves.stand,
    '10': moves.stand,
    '11': moves.stand,
  },
  '9': {
    '2': moves.stand,
    '3': moves.stand,
    '4': moves.stand,
    '5': moves.stand,
    '6': moves.stand,
    '7': moves.stand,
    '8': moves.stand,
    '9': moves.stand,
    '10': moves.stand,
    '11': moves.stand,
  }
}

const pairs_solution_matrix = {
  '2': {
    '2': moves.split,
    '3': moves.split,
    '4': moves.split,
    '5': moves.split,
    '6': moves.split,
    '7': moves.split,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '3': {
    '2': moves.split,
    '3': moves.split,
    '4': moves.split,
    '5': moves.split,
    '6': moves.split,
    '7': moves.split,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '4': {
    '2': moves.hit,
    '3': moves.hit,
    '4': moves.hit,
    '5': moves.split,
    '6': moves.split,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '5': {
    '2': moves.double,
    '3': moves.double,
    '4': moves.double,
    '5': moves.double,
    '6': moves.double,
    '7': moves.double,
    '8': moves.double,
    '9': moves.double,
    '10': moves.hit,
    '11': moves.hit,
  },
  '6': {
    '2': moves.split,
    '3': moves.split,
    '4': moves.split,
    '5': moves.split,
    '6': moves.split,
    '7': moves.hit,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '7': {
    '2': moves.split,
    '3': moves.split,
    '4': moves.split,
    '5': moves.split,
    '6': moves.split,
    '7': moves.split,
    '8': moves.hit,
    '9': moves.hit,
    '10': moves.hit,
    '11': moves.hit,
  },
  '8': {
    '2': moves.split,
    '3': moves.split,
    '4': moves.split,
    '5': moves.split,
    '6': moves.split,
    '7': moves.split,
    '8': moves.split,
    '9': moves.split,
    '10': moves.split,
    '11': moves.split,
  },
  '9': {
    '2': moves.split,
    '3': moves.split,
    '4': moves.split,
    '5': moves.split,
    '6': moves.split,
    '7': moves.stand,
    '8': moves.split,
    '9': moves.split,
    '10': moves.stand,
    '11': moves.stand,
  },
  '10': {
    '2': moves.stand,
    '3': moves.stand,
    '4': moves.stand,
    '5': moves.stand,
    '6': moves.stand,
    '7': moves.stand,
    '8': moves.stand,
    '9': moves.stand,
    '10': moves.stand,
    '11': moves.stand,
  },
  '11': {
    '2': moves.split,
    '3': moves.split,
    '4': moves.split,
    '5': moves.split,
    '6': moves.split,
    '7': moves.split,
    '8': moves.split,
    '9': moves.split,
    '10': moves.split,
    '11': moves.split,
  },

}

function get_random_card() {
  let random_index = Math.floor(Math.random() * 52);
  return cards[random_index];
}

function get_random_ace() {
  let ace_index = [12,25,38,51]
  let random_index = Math.floor(Math.random() * 4);
  return cards[ace_index[random_index]];
}

function get_random_non_10() {
  let nonace_index=[0,1,2,3,4,5,6,7,13,14,15,16,17,18,19,20,26,27,28,29,30,31,32,33,39,40,41,42,43,44,45,46]
  let random_index = Math.floor(Math.random() * nonace_index.length);
  return cards[nonace_index[random_index]]
}

function get_correct_response(dealer, card1, card2) {
  if (card1.card == card2.card) return pairs_solution_matrix[card1.value + ''][dealer.value + ''];
  if (card1.value == 11) return soft_solution_matrix[card2.value + ''][dealer.value + ''];
  if (card2.value == 11) return soft_solution_matrix[card1.value + ''][dealer.value + ''];
  else return hard_solution_matrix[(card1.value + card2.value) + ''][dealer.value + ''];
}

function populate_dealer_text(dealer_text, card) {
  dealer_text.innerHTML = `DEALER IS SHOWING A${(card.name == 'ACE' || card.name == '8') ? 'N' : ''}  ${card.name}.`
}

function populate_user_text(user_text, card1, card2) {
  if(card1.card == 'A' && card2.card == 'A') {
    user_text.innerHTML = "YOU HAVE A  SOFT 12."
  }
  else if(card1.card == 'A' || card2.card == 'A') {
    sum = card1.value + card2.value;
    user_text.innerHTML = `YOU HAVE A  SOFT ${sum}.`
  }
  else {
    sum = card1.value + card2.value;
    user_text.innerHTML = `YOU HAVE  ${sum}.`
  }
}

function clear_table() {
  user_cards = document.querySelector('.user__cards');
  dealer_cards = document.querySelector('.dealer__cards');

  dealer_card = document.querySelector('#dealer_img');
  facedown_card = document.querySelector('#facedown');
  user_card1 = document.querySelector('#card1_img');
  user_card2 = document.querySelector('#card2_img');

  if (dealer_card && facedown_card && user_card1 && user_card2) {
    dealer_card.classList.remove('card--dealt');
    facedown_card.classList.remove('card--dealt');
    user_card1.classList.remove('card--dealt');
    user_card2.classList.remove('card--dealt');

    setTimeout(() => {
      user_cards.removeChild(user_card1);
      user_cards.removeChild(user_card2);
      dealer_cards.removeChild(dealer_card);
      dealer_cards.removeChild(facedown_card);
    }, 250);
  }
}

function update_stats(win_or_lose, guesses) {
  correct_guesses = document.querySelector('.stats__correct');
  total_guesses = document.querySelector('.stats__total');
  if(win_or_lose == 'win') {
    if (guesses == 1) {
      new_correct_guesses = Number.parseInt(correct_guesses.innerHTML) + 1;
      correct_guesses.innerHTML = new_correct_guesses;
    }
    new_total_guesses = Number.parseInt(total_guesses.innerHTML) + 1;
    total_guesses.innerHTML = new_total_guesses;
  }
}

let ran = false;
let guessed_wrong = false;
let num_guesses = 0;
let pairs_only = false;
let aces_only = false;

function play_game() {
  clear_table();

  console.log('ran:\t' + ran);
  console.log('guessed_wrong:\t' + guessed_wrong);
  console.log('pairs_only:\t' + pairs_only);
  console.log('aces_only:\t' + aces_only);

  user_cards = document.querySelector('.user__cards');
  dealer_cards = document.querySelector('.dealer__cards');
  user_description = document.querySelector('.user__text');
  dealer_description = document.querySelector('.dealer__text');
  dev_answer = document.querySelector('.dev-answer');

  dealer = get_random_card();
  if(aces_only) card1 = get_random_ace();
  else card1 = get_random_card();
  card2 = get_random_card();
  if(card1.value + card2.value == 21) {
    if(card1.value == 11) {card2 = get_random_non_10();}
    else {card1 = get_random_non_10();}
  }
  if(pairs_only) card2 = card1;

  facedown_img = document.createElement('img');
  facedown_img.src = '/static/img/cards/facedown.png'
  facedown_img.classList.add('card', 'card--dealer');
  facedown_img.id = "facedown";

  dealer_img = document.createElement('img');
  dealer_img.src = dealer.src;
  dealer_img.classList.add('card', 'card--dealer');
  dealer_img.id = "dealer_img";

  card1_img = document.createElement('img');
  card1_img.src = card1.src;
  card1_img.classList.add('card', 'card--user');
  card1_img.id = "card1_img";

  card2_img = document.createElement('img');
  card2_img.src = card2.src;
  card2_img.classList.add('card', 'card--user');
  card2_img.id = "card2_img";


  
  setTimeout(() => {
    dealer_cards.appendChild(facedown_img);
    user_cards.appendChild(card1_img);
    dealer_cards.appendChild(dealer_img);
    user_cards.appendChild(card2_img);

    
    setTimeout(() => {
      facedown_img.classList.add('card--dealt');
      dealer_img.classList.add('card--dealt');
      card1_img.classList.add('card--dealt');
      card2_img.classList.add('card--dealt');

      populate_dealer_text(dealer_description, dealer);
      populate_user_text(user_description, card1, card2);
    }, 500)

  }, 500)
  

  correct_answer = get_correct_response(dealer, card1, card2);
  dev_answer.innerHTML = correct_answer;
  ran = true;
}

function show_answer(isCorrect) {
  // Create answer div
  let answer = document.createElement('div');
  answer.classList.add('answer');

  // Add correct/incorrect text & class
  if(isCorrect) {
    answer.innerHTML = "+ Correct!";
    answer.classList.add('answer--correct');
  } else {
    answer.innerHTML = "- Incorrect!";
    answer.classList.add('answer--incorrect');
  }

  // Append to body
  document.body.appendChild(answer);

  // Trigger animation
  setTimeout(() => {
    answer.classList.add('answer--show');
  }, 10);

  // Remove answer after 1 second
  setTimeout(() => {
    answer.classList.remove('answer--show');
    setTimeout(() => {
      document.body.removeChild(answer);
    }, 500);
  }, 1000);
}

function guess(move) {
  num_guesses++;
  let correct_answer = document.querySelector('.dev-answer').innerHTML;
  if (move != correct_answer) {
    // alert("Incorrect");
    show_answer(false);
    update_stats('lose', num_guesses);
  } else {
    // alert("Correct!");
    show_answer(true);
    update_stats('win', num_guesses);
    num_guesses = 0;
    setTimeout(() => {
      play_game();
    }, 500)
  }

}

function toggle_aces_only() {
  aces_only = !aces_only;
}

function toggle_pairs_only() {
  pairs_only = !pairs_only;
}

function add_guess_button_eventlisteners() {
  stand_button = document.querySelector('.move__stand');
  stand_button.addEventListener('click', ()=>{guess(moves.stand)})

  hit_button = document.querySelector('.move__hit');
  hit_button.addEventListener('click', () => { guess(moves.hit) })

  double_button = document.querySelector('.move__double');
  double_button.addEventListener('click', () => { guess(moves.double) })

  split_button = document.querySelector('.move__split');
  split_button.addEventListener('click', () => { guess(moves.split) })
}

function add_aces_only_eventlistener() {
  dom_aces_only = document.getElementsByClassName('table__aces')[0];
  dom_aces_only.addEventListener('click', () => {
    toggle_aces_only();
    dom_aces_only.classList.toggle('table__aces--enabled');
    play_game();
  }, false);
}

function add_pairs_only_eventlistener() {
  dom_pairs_only = document.getElementsByClassName('table__pairs')[0];
  dom_pairs_only.addEventListener('click', () => {
    toggle_pairs_only();
    dom_pairs_only.classList.toggle('table__pairs--enabled');
    play_game();
  }, false);
}


function main() {
  add_guess_button_eventlisteners();
  add_aces_only_eventlistener();
  add_pairs_only_eventlistener();
  play_game();
}