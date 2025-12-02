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

  // console.log(hand); 
  return hand;
};
  // console.log(drawLetters());

export const usesAvailableLetters = (input, lettersInHand) => {
  
};

    // letter_bank_copy = {}
    // for letter in letter_bank:
    //     letter_bank_copy[letter] = letter_bank_copy.get(letter, 0) + 1

    // word_upper = word.upper()
    // for char in word_upper:
    //     if letter_bank_copy.get(char, 0) > 0:
    //         letter_bank_copy[char] -= 1

    //     else:
    //         return False
        
    // return True

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

