/*
Created by Rijal Ghodi on August 25, 2022
email : rijalghodi10@gmail.com
github : https://github.com/rijalghodi

This is javascript code to convert arabic number into roman number
*/

// + Define the components of roman numbers
// roman numbers is wraped in an array named ROMAN_NUM. Each element of array
// contains an object representing roman numbers components in every
// decimal digit position
const ROMAN_NUM = [
  {
    first: "I",
    middle: "V",
    last: "X",
  },
  {
    first: "X",
    middle: "L",
    last: "C",
  },

  {
    first: "C",
    middle: "D",
    last: "M",
  },
  {
    first: "M",
    middle: "#V",
    last: "#X",
  },
];

// + Define function to convert decimal to roman
function convertToRoman(num) {
  const digitsLength = num.toString().length;

  // + Prepare the variable to store roman number
  let roman = "";

  // for every digit in arabic number, do:
  for (let digitPosition = digitsLength - 1; digitPosition >= 0; digitPosition--) {
    //
    // + Extract digits from the decimal number
    num = num % Math.pow(10, digitPosition + 1);
    let digit = Math.floor(num / Math.pow(10, digitPosition));

    // + Convert each digit to roman number
    // - if the digit == 9, add the the first and last roman number, such as IX
    if (digit == 9) {
      roman = roman + ROMAN_NUM[digitPosition].first + ROMAN_NUM[digitPosition].last;
    }

    // - if the digit == 4, add the first and middle roman number, such as IV
    else if (digit == 4) {
      roman = roman + ROMAN_NUM[digitPosition].first + ROMAN_NUM[digitPosition].middle;
    } else {
      //
      // - if the digit >= 5, add the middle roman number (V, L, D, or #V)
      // according to digitPosition
      if (digit >= 5) {
        roman = roman + ROMAN_NUM[digitPosition].middle;
      }
      // then add the fist roman number to complete that digit
      for (let i = 0; i < digit % 5; i += 1) {
        roman = roman + ROMAN_NUM[digitPosition].first;
      }
    }
  }
  return roman;
}
// + Test
console.log(convertToRoman(36));
