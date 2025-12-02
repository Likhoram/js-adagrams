const LETTER_POOL = {
  'A': 9,
  'B': 2,
  'C': 2,
  'D': 4,
  'E': 12,
  'F': 2,
  'G': 3,
  'H': 2,
  'I': 9,
  'J': 1,
  'K': 1,
  'L': 4,
  'M': 2,
  'N': 6,
  'O': 8,
  'P': 2,
  'Q': 1,
  'R': 6,
  'S': 4,
  'T': 6,
  'U': 4,
  'V': 2,
  'W': 2,
  'X': 1,
  'Y': 2,
  'Z': 1
};

const SCORE_CHART = {
  'A': 1,
  'B': 3,
  'C': 3,
  'D': 2,
  'E': 1,
  'F': 4,
  'G': 2,
  'H': 4,
  'I': 1,
  'J': 8,
  'K': 5,
  'L': 1,
  'M': 3,
  'N': 1,
  'O': 1,
  'P': 3,
  'Q': 10,
  'R': 1,
  'S': 1,
  'T': 1,
  'U': 1,
  'V': 4,
  'W': 4,
  'X': 8,
  'Y': 4,
  'Z': 10
};

const HAND_SIZE = 10;
const BONUS_THRESHOLD = 7;
const BONUS_POINTS = 8;

export const drawLetters = () => {
  const totalLetterList = [];
  let hand = [];
  let count = 0;

  //  make a list of all letters including repetition
  for (const [letter, count] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < count; i++) {
      totalLetterList.push(letter);
    }
  }; 

  // use random number as index and pop a letter and return a hand
  while (count < HAND_SIZE) {
    let letterIndex = Math.floor(Math.random() * totalLetterList.length);
    let singleLetter = totalLetterList.splice(letterIndex,1)[0];
    hand.push(singleLetter);
    count += 1;
  };

  return hand;
};
  // console.log(drawLetters());

export const usesAvailableLetters = (input, lettersInHand) => {
  let letterBankCopy = {};
  for (const letter of lettersInHand) {
    if (letterBankCopy[letter]) {
      letterBankCopy[letter] += 1;
    } else {
      letterBankCopy[letter] = 1;
    }
  }

  let wordUpper = input.toUpperCase();
  for (const char of wordUpper) {
    if (letterBankCopy[char] > 0) {
      letterBankCopy[char] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  for (const char of word.toUpperCase()) {
    if (char in SCORE_CHART) {
      score += SCORE_CHART[char];
    }
  }

  if (word.length >= BONUS_THRESHOLD && word.length <= HAND_SIZE) {
    score += BONUS_POINTS;
  }

  return score;
};
// console.log(scoreWord('lilac'));

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let highestWord = words[0];
  for (let word of words) {
    let score = scoreWord(word);
    if (score > highestScore) {
      highestScore = score;
      highestWord = word;
    } else if (score === highestScore) {
      if (word.length < highestWord.length && word.length !== HAND_SIZE && highestWord.length !== HAND_SIZE) {
        highestWord = word;
      } else if (word.length === HAND_SIZE && highestWord.length !== HAND_SIZE) {
        highestWord = word;
      }
    };
  }
  return { word: highestWord, score: highestScore };
};
// console.log(highestScoreFrom(['X', 'XX', 'XXX', 'XXXX']));
