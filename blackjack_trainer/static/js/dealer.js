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

function get_random_card() {
  random_index = Math.floor(Math.random() * 52);
  return cards[random_index];
}

function get_correct_response(dealer, card1, card2) {
  if(card1.card == card2.card) {
    if (card1.card == 'A' || card1.card == '8') return moves.split;
    else if (card1.value == 10) return moves.stand;
    else if(card1.value == 9) {
      if(dealer.value == 7 || dealer.value >= 10) return moves.stand;
      else return moves.split
    }
    else if(card1.value == 7) {
      if(dealer.value >= 8) return moves.stand;
      else return moves.split;
    }
    else if(card1.value == 6) {
      if(dealer.value >= 7) return moves.stand;
      else return moves.split
    }
    else if(card1.value == 5) {
      if(dealer.value >= 10) return moves.stand;
      else return moves.double;
    }
    else if(card1.value == 4) {
      if(dealer.value <= 4 || dealer.value >= 7) return moves.hit
      else return moves.split;
    }
    else {
      if(dealer.value >= 8) return moves.hit;
      else return moves.split;
    }
  }

  else if(card1.card == 'A' || card2.card == 'A') {
    let sum = card1.value + card2.value;
    if(sum >= 19) return moves.stand;
    else if(sum == 18) {
      if(dealer.value == 2 || dealer.value == 7 || dealer.value == 8) return moves.stand;
      else if(dealer.value >= 9) return moves.hit;
      else return moves.double;
    }
    else if(sum == 17) {
      if(dealer.value == 2 || dealer.value >= 7) return moves.hit;
      else return moves.double;
    }
    else if(sum == 16 || sum == 15) {
      if(dealer.value <= 3 || dealer.value >= 7) return moves.hit;
      else return moves.double;
    }
    else{
      if(dealer.value <= 4 || dealer.value >= 7) return moves.hit;
      else return moves.double;
    }
  }

  else {
    let sum = card1.value + card2.value;
    if(sum >= 17) return moves.stand;
    else if(sum <= 8) return moves.hit;
    else if(sum >= 13) {
      if(dealer.value >= 7) return moves.hit;
      else return moves.stand;
    }
    else if(sum == 12) {
      if(dealer.value <= 3 || dealer.value >= 7) return moves.hit;
      else return moves.stand;
    }
    else if(sum == 11) {
      if(dealer.value == 11) return moves.hit;
      else return moves.double;
    }
    else if(sum == 10) {
      if(dealer.value >= 10) return moves.hit;
      else return moves.double;
    }
    else {
      if(dealer.value == 2 || dealer.value >= 7) return moves.hit;
      else return moves.double;
    }
  }
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
  user_card1 = document.querySelector('#card1_img');
  user_card2 = document.querySelector('#card2_img');

  user_cards.removeChild(user_card1);
  user_cards.removeChild(user_card2);
  dealer_cards.removeChild(dealer_card);
  run();
}

function update_stats(win_or_lose) {
  correct_guesses = document.querySelector('.stats__correct');
  total_guesses = document.querySelector('.stats__total');
  if(win_or_lose == 'win') {
    new_correct_guesses = Number.parseInt(correct_guesses.innerHTML) + 1;
    correct_guesses.innerHTML = new_correct_guesses;
  }
  new_total_guesses = Number.parseInt(total_guesses.innerHTML) + 1;
  total_guesses.innerHTML = new_total_guesses;
}

let ran = false;
let guessed_wrong = false;
let pairs_only = false;
let aces_only = false;

function play_game() {
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
  card1 = get_random_card();
  card2 = get_random_card();
  if(card1.value + card2.value == 21) {
    while(card1.value >= 10) card1 = get_random_card();
  }
  if(pairs_only) card2 = card1;
  if(aces_only) {
    if(card1.value == 11) {
      while(card2.value == 10) card2 = get_random_card();
    } else if(card1.value == 10) {
      if(card2.value == 11) {
        while(card1.value == 10) card1 = get_random_card();
      }
    }
  }

  // dealer = cards[4];
  // card1 = cards[5];
  // card2 = cards[0];

  if(!ran) {
    facedown_img = document.createElement('img');
    facedown_img.src = '/static/img/cards/facedown.png'
    facedown_img.classList.add('card')
    facedown_img.id = "facedown";
  }

  dealer_img = document.createElement('img');
  dealer_img.src = dealer.src;
  dealer_img.classList.add('card');
  dealer_img.id = "dealer_img";

  card1_img = document.createElement('img');
  card1_img.src = card1.src;
  card1_img.classList.add('card');
  card1_img.id = "card1_img";

  card2_img = document.createElement('img');
  card2_img.src = card2.src;
  card2_img.classList.add('card');
  card2_img.id = "card2_img";


  if(!ran) dealer_cards.appendChild(facedown_img);
  user_cards.appendChild(card1_img);
  dealer_cards.appendChild(dealer_img);
  user_cards.appendChild(card2_img);

  populate_dealer_text(dealer_description, dealer);
  populate_user_text(user_description, card1, card2);

  correct_answer = get_correct_response(dealer, card1, card2);
  dev_answer.innerHTML = correct_answer;
  ran = true;
}

function guess(move) {
  let correct_answer = document.querySelector('.dev-answer').innerHTML;
  if (move != correct_answer) {
    alert("Incorrect");
    guessed_wrong = true;
    update_stats('lose');
  } else {
    clear_table();
    play_game();
    if(!guessed_wrong) update_stats('win');
    else update_stats('lose');
  }

}

function toggle_pairs_only() {
  if(aces_only) aces_only = !aces_only;
  pairs_only = !pairs_only;
}

function toggle_aces_only() {
  if(pairs_only) pairs_only = !pairs_only;
  aces_only = !aces_only;
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

function add_pairs_only_eventlistener() {
  dom_pairs_only = document.getElementsByClassName('table__pairs')[0];
  dom_aces_only = document.getElementsByClassName('table__aces')[0];
  dom_pairs_only.addEventListener('click', () => {
    toggle_pairs_only();
    console.log(dom_pairs_only);
    dom_pairs_only.classList.toggle('table__pairs--enabled');
    if(aces_only) dom_aces_only.classList.toggle('table__aces--enable');
  }, false);
}

function add_aces_only_eventlistener() {
  dom_aces_only = document.getElementsByClassName('table__aces')[0];
  dom_pairs_only = document.getElementsByClassName('table__pairs')[0];
  dom_aces_only.addEventListener('click', () => {
    toggle_aces_only();
    dom_aces_only.classList.toggle('table__aces--enable');
    if(pairs_only) dom_pairs_only.classList.toggle('table__pairs--enabled');
  }, false);
}

function main() {
  add_guess_button_eventlisteners();
  add_pairs_only_eventlistener();
  add_aces_only_eventlistener();
  play_game();
}