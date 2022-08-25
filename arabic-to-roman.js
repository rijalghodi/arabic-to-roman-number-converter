// Define the member of roman numbers
// Every element index in ROMAN_NUM array represent the digitPosition of decimal number
// first means roman number apear in the first glance in digit position of decimal number
// second menas second, last means last.
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

// Define function to convert decimal to roman
function convertToRoman(num) {
  const digitsLength = num.toString().length;

  // var roman will be the roman number version of decimal
  let roman = "";

  for (let digitPosition = digitsLength; digitPosition > 0; digitPosition--) {
    //extract digit from the decimal number
    num = num % Math.pow(10, digitPosition);
    let digitValue = Math.floor(num / Math.pow(10, digitPosition - 1));

    // convert each digit to roman number
    romanPosition = digitPosition - 1;
    if (digitValue == 9) {
      roman = roman + ROMAN_NUM[romanPosition].first + ROMAN_NUM[romanPosition].last;
    } else if (digitValue == 4) {
      roman = roman + ROMAN_NUM[romanPosition].first + ROMAN_NUM[romanPosition].middle;
    } else {
      if (digitValue >= 5) {
        roman = roman + ROMAN_NUM[romanPosition].middle;
      }
      // concat the
      for (let i = 0; i < digitValue % 5; i += 1) {
        roman = roman + ROMAN_NUM[romanPosition].first;
      }
    }
  }
  return roman;
}

console.log(convertToRoman(36));
