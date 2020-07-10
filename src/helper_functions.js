import $ from "jquery";

export function readTextFile(filename) {
  let output = [];
  $.get(
    filename,
    function(data) {
      output.push(data.replace(/"/g, "").split(","));
    },
    "text"
  );
  return output;
}

export function checkPrime(num) {
  if (num === 2) {
    return true;
  } else if (num % 2 === 0 || num < 2) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export function genTriplets(m, n) {
  if (m <= n) {
    return;
  }
  let result = {};
  result.a = Math.pow(m, 2) - Math.pow(n, 2);
  result.b = 2 * m * n;
  result.c = Math.pow(m, 2) + Math.pow(n, 2);
  return result;
}

export function countDivisors(num) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (num / i === i) {
        count++;
      } else {
        count += 2;
      }
    }
  }
  return count;
}

// Used in:
export function sumDivisors(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
}

// Used in: P14
// Computes the next value in the collatz sequence for a given num
export function collatzSeq(num) {
  return num % 2 === 0 ? num / 2 : 3 * num + 1;
}

// Used in: P15, for binCoeff function
// Recursive implementation of factorial function
export function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Used in: P20
// An alternative to the recursive factorial implementation above, useful for huge factorial values due to bigint class.
export function bigFactorial(n) {
  let f = BigInt(1);
  n = BigInt(n);
  while (n > 1) {
    f = f * --n;
  }
  return f;
}

// Used in: P15
// Computes the binary coefficient for a given value of n and k
export function binCoeff(n, k) {
  if (n < k) {
    return;
  }
  return factorial(n) / (factorial(k) * factorial(n - k));
}

// Used in: P17
// Given a number greater than one and less than 10000, will find the length of the number when written out in english
export function getWordLength(n) {
  let word = [];
  if (n >= 1000) {
    //count += getWord(Math.floor(n / 1000));
    word.push(getWord(Math.floor(n / 1000)));
    word.push("thousand");
    //count += n == 1000 ? 8 : 11; //thousand and
    n -= Math.floor(n / 1000) * 1000;
    if (n < 100 && n > 0) {
      word.push("and");
    }
  }
  if (n >= 100) {
    //count += getWord(Math.floor(n / 100));
    //count += n == 100 ? 7 : 10; //hundred and
    word.push(getWord(Math.floor(n / 100)));
    word.push("hundred");
    if (n % 100 > 0) {
      word.push("and");
    }
    n -= Math.floor(n / 100) * 100;
  }
  if (n >= 20) {
    //count += getWord(Math.floor(n / 10)*10);
    word.push(getWord(Math.floor(n / 10) * 10));
    n -= Math.floor(n / 10) * 10;
  }
  //count += getWord(n);
  if (n >= 1) {
    word.push(getWord(n));
  }

  return word;
  //return count;
}

// converts an integer value to its corresponding word value
export function getWord(n) {
  switch (n) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
    case 10:
      return "ten";
    case 11:
      return "eleven";
    case 12:
      return "twelve";
    case 13:
      return "thirteen";
    case 14:
      return "fourteen";
    case 15:
      return "fifteen";
    case 16:
      return "sixteen";
    case 17:
      return "seventeen";
    case 18:
      return "eighteen";
    case 19:
      return "nineteen";
    case 20:
      return "twenty";
    case 30:
      return "thirty";
    case 40:
      return "forty";
    case 50:
      return "fifty";
    case 60:
      return "sixty";
    case 70:
      return "seventy";
    case 80:
      return "eighty";
    case 90:
      return "ninety";
    default:
      return "zero";
  }
}

export function checkAbundant(num) {
  return sumDivisors(num) > num ? true : false;
}

export function nextPermutation(array) {
  var i = array.length - 1;
  while (i > 0 && array[i - 1] >= array[i]) {
    i--;
  }

  if (i <= 0) {
    return false;
  }

  var j = array.length - 1;

  while (array[j] <= array[i - 1]) {
    j--;
  }

  var temp = array[i - 1];
  array[i - 1] = array[j];
  array[j] = temp;

  j = array.length - 1;

  while (i < j) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    i++;
    j--;
  }

  return array;
}

export function quadraticPrime(a, b, n) {
  let result = Math.pow(n, 2) + a * n + b;
  return checkPrime(Math.abs(result));
}

export function sumOfPowers(num, pow) {
  if (num === 1) {
    return false;
  }
  let sum = 0;
  let n = num;
  while (n > 0) {
    sum += Math.pow(n % 10, pow);
    n = Math.floor(n / 10);
  }
  return sum === num;
}

export function checkPalindrome(input){
  if(typeof input !== 'string'){
    input = input.toString();
  }
  return input === input.split("").reverse().join("");
}