

function checkBinaryEvenOrOdd(num) {
  const binaryString = num.toString(2);
  let binaryNum = parseInt(binaryString);
  if (binaryNum % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}


// This assumes that the first option (extraversion, sensing, thinking, judgment) of each binary Myers-Brigg quality is translated to a 1 while the second option (information, intuition, feeling, perception) is translated to 0.
// E = 1 / I = 0
// S = 1 / N = 0
// T = 1 / F = 0
// J = 1 / P = 0

// Your first task is to write a function that converts the results of each person's Myers-Briggs test into a series of zeroes and ones.

// Next, translate princexList list into an array of arrays called princexArray. Each nested array should contain a key (the name of the person) and a value (the results of their Myers-Briggs test in binary code).


function getMBScore(princexList) {
  let outputArray = []

  for (const name in princexList) {
    let score = princexList[name];
    let resultNumber = [0, 0, 0, 0];

    resultNumber[0] = score.eVsI === "E" ? 1 : 0;
    resultNumber[1] = score.sVsI === "S" ? 1 : 0;
    resultNumber[2] = score.tVsF === "T" ? 1 : 0;
    resultNumber[3] = score.jVsP === "J" ? 1 : 0;

    outputArray.push([name, parseInt(resultNumber.join(''), 2)]);
  };

  return outputArray;
}

// Next, write an algorithm that uses bitwise operators to determine whether a person is a good match for Paris. If three or more values on the Myers-Briggs test are the same, they should be a good match. If all four values are the same, they should be a great match. How you sort this information is up to you.


function determineMatch(princexArray, parisScore) {

  let goodPrincexArray = [];
  let greatPrincexArray = [];


  princexArray.forEach(princex => {
    const princexName = princex[0];
    const princexScore = princex[1];
    const scoreDifference = princexScore ^ parisScore;
    const matchingTraits = 4 - scoreDifference.toString(2).split('').filter(bit => bit === '1').length;

    if (matchingTraits === 0) {
      greatPrincexArray.push(princex);
    }
    else if (matchingTraits >= 3) {
      goodPrincexArray.push(princex);
    }

    // if all four bits of princexScore match parisScore, push princex object to greatPrincexArray
    // ELSE if at least three bits of princexScore match parisScore, push princex object to goodPrincexArray
  });

  return { goodPrincexArray, greatPrincexArray };
}

function oneHitWonder(skipBitsBy, linesToPrint) {
  let initialNum = 0b00000000; 

  let binarySkip = parseInt(skipBitsBy * 2, 2);
  for (let i = 0; i < linesToPrint; i++){
    console.log(initialNum + binarySkip);
  }

  function printLines(startingNumber, iterations = 0, bitsToSkip = 0) {
    if (iterations == linesToPrint)
    {
      return;
    } else {
      let newIterator = iterations + 1;
      let newNumber = startingNumber + iterations;
      console.log()
      
    }
  }
}

function generateOneHitWonder() {
  let pattern = "";
  let totalLines = 8; // Total lines in the pattern

  for (let line = 0; line < totalLines; line++) {
    let lineString = ""; // Initialize an empty string for each line
    for (let bit = totalLines - 1; bit >= 0; bit--) {
      // For each bit in the line
      if (bit === line) {
        // If the current bit's position matches the line number, it's a '1'
        lineString += "1";
      } else {
        // Otherwise, it's a '0'
        lineString += "0";
      }
    }
    pattern += lineString + "\n"; // Add the line string to the pattern, followed by a newline character
  }

  return pattern;
}

// '01111111\n10111111\n11011111\n11101111\n11110111\n11111011\n11111101\n11111110\n'



function generatePattern(bits) {
  let pattern = [];
  let str = '';

  // Generate initial pattern
  for (let i = 0; i < bits; i++) {
      str += '0';
  }
  str += '1';
  pattern.push(str);

  // Generate subsequent patterns
  for (let skip = 1; skip <= bits - 1; skip++) {
      str = '';
      for (let i = 0; i < bits; i++) {
          if (i === skip) {
              str += '1';
          } else {
              str += '0';
          }
      }
      pattern.push(str);
  }

  return pattern.join('\n');
}

// Test with 8 bits
console.log(generatePattern(8));


function encryptString(string) {
  let encryptedBinary = [];

  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    
    charCode <<=2;
    
    // let reversedBinary = "";
    // for (let j = 0; j < charCode.length; j++) {
    //   reversedBinary += (charCode[j] === "0") ? "1" : "0";
    // }
    
    charCode = ~charCode;
    charCode = charCode & 0xFFFFFFFF; //keep it in correct 32 bit form


    charCode <<=3;
    let binaryString = (charCode >>> 0).toString(2);
    encryptedBinary.push(binaryString);
    console.log(encryptedBinary)
  }
  
  // Encrypt each character by:
    // convert to ASCII       charCodeAt()
    // binary shift left by two  <<=2
    // flip every bit in the binary ~
    // shift left three <<=3
    // encryptedBinary += newBinaryString;
  // let decimalNumber = parseInt(encryptedBinary, 2);
  let decimalNumber = 0;
  encryptedBinary.forEach((bin) => {
    decimalNumber += parseInt(bin, 2)
  })
  return decimalNumber;

}

function decryptString(encryptedNumber) {
  let binaryString = encryptedNumber.toString(2).padStart(160, '0');
  let decryptedString = '';

  for (let i = 0; i < binaryString.length; i += 32) {
    let binarySection = binaryString.substring(i, i + 32);
    let charCode = parseInt(binarySection, 2);

    charCode >>=3;
    charCode = ~charCode;
    charCode >>=2;

    decryptedString += String.fromCharCode(charCode);
  }

  return decryptedString;

  

  //shift right three
  //flip bits
  //shift right two
  //Convert the alphanum

  // 
}







const princexList = {
  Paris: {
    eVsI: "E",
    sVsI: "S",
    tVsF: "F",
    jVsP: "P"
  },

  //["Paris", 1100]
  Pat: {
    eVsI: "I",
    sVsI: "S",
    tVsF: "T",
    jVsP: "P"
  },
  Pau: {
    eVsI: "E",
    sVsI: "S",
    tVsF: "T",
    jVsP: "J"
  },
  Pearl: {
    eVsI: "E",
    sVsI: "I",
    tVsF: "T",
    jVsP: "P"
  },
  Puck: {
    eVsI: "I",
    sVsI: "S",
    tVsF: "T",
    jVsP: "J"
  },
  Pluto: {
    eVsI: "E",
    sVsI: "S",
    tVsF: "T",
    jVsP: "P"
  },
  // ["Pluto", 1110]
  Parker: {
    eVsI: "I",
    sVsI: "S",
    tVsF: "T",
    jVsP: "J"
  }
}

// ["Paris", 1100]


// function asciiConverter(string) {
//   return string.split("").map(function(letter) {
//     return letter.charCodeAt(0);
//   });
// }

// > String.fromCharCode(99, 97, 116);
// "cat"

// > (34).toString(2);
// "100010"

// // This works!
// > (0b100110 & 0b110011).toString(2)
// "100010"

