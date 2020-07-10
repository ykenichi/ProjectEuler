import * as helperModule from "./helper_functions.js";
import * as constant from "./constants.js";

// array that holds all of the solutions to project euler, starting from problem 1
const allSolutions = [
  {
    name: "getMultiples35",
    func: function(num = 1000) {
      let sum = 0;
      for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5) {
          sum += i;
        }
      }
      return sum;
    }
  },
  {
    name: "evenFibonacci",
    func: function(num = 4000000) {
      let sum = 0;
      let prev1 = 1;
      let prev2 = 2;
      while (prev2 < num) {
        if (prev2 % 2 === 0 && prev2 < num) {
          sum += prev2;
        }
        let temp = prev2;
        prev2 += prev1;
        prev1 = temp;
      }
      return sum;
    }
  },
  {
    name: "largestPrimeFactor",
    func: function(num = 600851475143) {
      let maxPrime = -1;
      while (num % 2 === 0) {
        num /= 2;
      }
      for (let i = 3; i <= Math.sqrt(num); i += 2) {
        while (num % i === 0) {
          maxPrime = i;
          num /= i;
        }
      }
      if (num > 0) {
        maxPrime = num;
      }
      return maxPrime;
    }
  },
  {
    name: "largestPalindrome",
    func: function(num = 3) {
      const limit = Math.pow(10, 3) - 1;
      let largest = 0;

      for (let i = limit; i >= 100; i--) {
        if (largest >= i * 999) {
          break;
        }
        for (let j = limit; j >= i; j--) {
          let str = (i * j).toString();
          if (
            str.slice(0, str.length / 2) ===
              str
                .slice(str.length / 2, str.length)
                .split("")
                .reverse()
                .join("") &&
            i * j > largest
          ) {
            largest = i * j;
          }
        }
      }
      return largest;
    }
  },
  {
    name: "smallestMultiple",
    func: function(num = 20) {
      let isNotDiv = true;
      let current = num;
      while (isNotDiv) {
        isNotDiv = false;
        for (let i = 2; i <= num; i++) {
          if (current % i !== 0) {
            isNotDiv = true;
            break;
          }
        }
        current++;
      }
      return current - 1;
    }
  },
  {
    name: "sumSquareDifference",
    func: function(num = 100) {
      let squareSum = 0;
      let sumSquare = 0;
      for (let i = 1; i <= num; i++) {
        sumSquare += i * i;
        squareSum += i;
      }
      squareSum *= squareSum;
      return squareSum - sumSquare;
    }
  },
  {
    name: "nthPrime",
    func: function(num = 10001) {
      let prime = 2;
      let numPrime = 0;
      let counter = 1;
      while (numPrime < num) {
        if (helperModule.checkPrime(counter)) {
          prime = counter;
          numPrime++;
        }
        counter++;
      }
      return prime;
    }
  },
  {
    name: "largestProductSeries",
    func: function(num = 13, series = constant.p8_series) {
      let max = 0;
      for (let i = 0; i < series.length; i++) {
        let product = 1;
        for (let j = i; j < i + num && j < series.length; j++) {
          let curInt = parseInt(series.charAt(j), 10);
          if (curInt === 0 || curInt === "NaN") {
            break;
          } else {
            product *= curInt;
          }
        }
        if (product > max) {
          max = product;
        }
      }
      return max;
    }
  },
  {
    name: "specialPythagoreanTriplet",
    func: function(num = 1000) {
      for (let n = 1; n < num; n++) {
        for (let m = n + 1; m < num; m++) {
          let triplet = helperModule.genTriplets(m, n);
          if (triplet.a + triplet.b + triplet.c === num) {
            //console.log(triplet);
            return triplet.a * triplet.b * triplet.c;
          }
        }
      }
      return;
    }
  },
  {
    name: "summationOfPrimes",
    func: function(num = 2000000) {
      let sum = 0;
      for (let i = 2; i < num; i++) {
        sum += helperModule.checkPrime(i) ? i : 0;
      }
      return sum;
    }
  },
  {
    name: "largestProductInGrid",
    func: function(rawGrid = constant.p11_grid, dim = 20) {
      let grid = [];
      for (let i = 0; i < dim; i++) {
        let row = [];
        for (let j = 0; j < dim; j++) {
          row.push(parseInt(rawGrid[i * dim + j], 10));
        }
        grid.push(row);
      }
      let max = 0;
      //let nums = [0,0,0,0];

      //check _
      for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim - 4; j++) {
          let product =
            grid[i][j] * grid[i][j + 1] * grid[i][j + 2] * grid[i][j + 3];
          if (product > max) {
            max = product;
          }
        }
      }
      //check |
      for (let i = 0; i < dim - 4; i++) {
        for (let j = 0; j < dim; j++) {
          let product =
            grid[i][j] * grid[i + 1][j] * grid[i + 2][j] * grid[i + 3][j];
          if (product > max) {
            max = product;
          }
        }
      }
      //check \ diagonals
      for (let i = 0; i < dim - 3; i++) {
        for (let j = 0; j < dim - 3; j++) {
          let product =
            grid[i][j] *
            grid[i + 1][j + 1] *
            grid[i + 2][j + 2] *
            grid[i + 3][j + 3];
          if (product > max) {
            max = product;
          }
        }
      }
      //check / diagonals
      for (let i = 0; i < dim - 3; i++) {
        for (let j = 0; j < dim - 3; j++) {
          let product =
            grid[i][j + 3] *
            grid[i + 1][j + 2] *
            grid[i + 2][j + 1] *
            grid[i + 3][j];
          if (product > max) {
            max = product;
          }
        }
      }
      return max;
    }
  },
  {
    name: "highlyDivisibleTriangular",
    func: function(num = 500) {
      let divCount = 0;
      let counter = 1;
      let triNum = 0;
      while (divCount < num) {
        triNum += counter;
        divCount = helperModule.countDivisors(triNum);
        counter++;
      }
      return triNum;
    }
  },
  {
    name: "largeSum",
    func: function(num = 50, size = 10, digits = constant.p13_numbers) {
      let rollingSum = 0;

      for (let i = 0; i < digits.length; i++) {
        rollingSum += parseInt(digits[i], 10);
      }

      while (Math.floor(rollingSum).toString().length > size) {
        rollingSum /= 10;
      }

      return Math.floor(rollingSum);
    }
  },
  {
    name: "longestCollatz",
    func: function(num = 1000000) {
      let maxCollatz = 0;
      let maxCount = 0;
      for (let i = num; i > 0; i--) {
        let collatz = i;
        let counter = 1;
        while (collatz > 1) {
          collatz = helperModule.collatzSeq(collatz);
          counter++;
        }
        if (counter > maxCount) {
          maxCount = counter;
          maxCollatz = i;
        }
      }
      return maxCollatz;
    }
  },
  {
    name: "latticePaths",
    func: function(num = 20) {
      return helperModule.binCoeff(num * 2, num);
    }
  },
  {
    name: "powerDigitSum",
    func: function(num = 1000) {
      let largeSum = String(BigInt(Math.pow(2, num)));
      let digitSum = 0;

      for (let d of largeSum) {
        digitSum += parseInt(d, 10);
      }

      return digitSum;
    }
  },
  {
    name: "numberLetterCounts",
    func: function(num = 1000) {
      let count = 0;
      for (let i = 1; i <= num; i++) {
        count += helperModule.getWordLength(i).join("").length;
      }
      return count;
    }
  },
  {
    name: "maxPathSum",
    func: function(triangle = constant.p18_triangle) {
      let tri = [];
      for (let i = 0; i < triangle.length; i++) {
        let row = triangle[i].split(" ");
        for (let j = 0; j < row.length; j++) {
          row[j] = parseInt(row[j], 10);
        }
        tri.push(row);
      }
      for (let i = tri.length - 1; i > 0; i--) {
        for (let j = 0; j < tri[i].length - 1; j++) {
          tri[i - 1][j] += Math.max(tri[i][j], tri[i][j + 1]);
        }
      }
      //console.log(tri);
      return tri[0][0];
    }
  },
  {
    name: "countingSundays",
    func: function(start = 1901, end = 2000) {
      let numSundays = 0;
      for (let y = start; y <= end; y++) {
        for (let m = 0; m < 12; m++) {
          if (new Date(y, m, 1).getDay() === 0) {
            numSundays++;
          }
        }
      }
      return numSundays;
    }
  },
  {
    name: "factorialDigitSum",
    func: function(num = 100) {
      let f = String(helperModule.bigFactorial(num));
      let digitSum = 0;
      for (let d of f) {
        digitSum += parseInt(d, 10);
      }
      return digitSum;
    }
  },
  {
    name: "amicableNumbers",
    func: function(limit = 10000) {
      let map = {};
      let sum = 0;
      for (let i = 1; i < limit; i++) {
        let s = helperModule.sumDivisors(i);
        if (map.hasOwnProperty(i) && map[i] === s) {
          sum += i;
          sum += s;
        }
        map[s.toString()] = i;
      }
      //console.log(map);
      return sum;
    }
  },
  {
    name: "namesScores",
    func: function(names = constant.p022_names) {
      let sum = 0;
      const sortedNames = names.sort((a, b) => (a > b ? 1 : -1));
      for (let i = 0; i < sortedNames.length; i++) {
        let rank = i + 1;
        let score = 0;
        for (let j = 0; j < sortedNames[i].length; j++) {
          score += sortedNames[i].charCodeAt(j) - 64;
        }
        sum += rank * score;
      }
      return sum;
    }
  },
  {
    name: "nonAbundantSums",
    func: function(limit = 28123) {
      var listAbundants = [];
      var sum = 0;
      for (let i = 1; i <= limit; i++) {
        if (helperModule.checkAbundant(i)) {
          listAbundants.push(i);
        }
      }
      let abundantSums = new Array(limit + 1).fill(0);
      for (let i = 0; i < listAbundants.length; i++) {
        for (let j = i; j < listAbundants.length; j++) {
          let sumOfAbundants = listAbundants[i] + listAbundants[j];
          if (sumOfAbundants > limit) {
            break;
          }
          if (abundantSums[sumOfAbundants] === 0) {
            abundantSums[sumOfAbundants] = sumOfAbundants;
          }
        }
      }
      for (let i = 1; i < abundantSums.length; i++) {
        if (abundantSums[i] === 0) {
          sum += i;
        }
      }
      return sum;
    }
  },
  {
    name: "lexicographicPermutations",
    func: function(n = 1000000) {
      let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let i = 0; i < n - 1; i++) {
        digits = helperModule.nextPermutation(digits);
      }
      return digits.join("");
    }
  },
  {
    name: "thousandDigitFibonacci",
    func: function(n = 1000) {
      let counter = 3;
      let prev1 = BigInt(1);
      let prev2 = BigInt(2);
      while (prev2.toString().length < n) {
        let temp = prev2;
        prev2 += prev1;
        prev1 = temp;
        counter++;
      }
      return counter;
    }
  },
  {
    name: "reciprocalCycles",
    func: function(d = 1000) {
      let longestCycle = 0;
      let result = 0;
      for (let i = d; i >= 2; i--) {
        if (longestCycle >= i) {
          break;
        }
        let remainders = new Array(i).fill(0);
        let value = 1;
        let position = 0;
        while (remainders[value] === 0 && value !== 0) {
          remainders[value] = position++;
          value = (value * 10) % i;
        }

        if (position - remainders[value] > longestCycle) {
          longestCycle = position - remainders[value];
          result = position;
          //console.log(position);
          //console.log(remainders[value]);
        }
      }
      return result;
    }
  },
  {
    name: "quadraticPrimes",
    func: function() {
      let max = 0;
      let product = 0;
      for (let a = -1000; a <= 1000; a++) {
        for (let b = -1000; b <= 1000; b++) {
          let n = 0;
          while (helperModule.quadraticPrime(a, b, n)) {
            n++;
          }
          if (n > max) {
            product = a * b;
            max = n;
            //console.log(product);
            //console.log(max);
          }
        }
      }
      return product;
    }
  },
  {
    name: "numberSpiralDiagonals",
    func: function(size = 1001) {
      let sum = 1;
      let last = 1;
      for (let i = 1; i < 2 * size - 1; i++) {
        let level = Math.ceil(i / 4) * 2;
        last += level;
        sum += last;
      }
      return sum;
    }
  },
  {
    name: "distinctPowers_ChromeOnly",
    func: function(a = 100, b = 100) {
      let combinations = [];
      for (let i = 2; i <= a; i++) {
        for (let j = 2; j <= b; j++) {
          let power = i ** j;
          if (!combinations.includes(power)) {
            combinations.push(power);
          }
        }
      }
      return combinations.length;
    }
  },
  {
    name: "digitFifthPowers",
    func: function(pow = 5) {
      let sum = 0;
      let upperLimit = pow * Math.pow(9, pow);
      for (let i = 0; i < upperLimit - 100; i++) {
        if (helperModule.sumOfPowers(i, pow)) {
          sum += i;
        }
      }
      return sum;
    }
  },
  {
    name: "coinSums",
    func: function(target = 200) {
      let denominations = [1, 2, 5, 10, 20, 50, 100, 200];
      let ways = new Array(target + 1).fill(0);
      ways[0] = 1;

      for (let i = 0; i < denominations.length; i++) {
        for (let j = denominations[i]; j <= target; j++) {
          ways[j] += ways[j - denominations[i]];
        }
      }
      return ways[target];
    }
  },
  {
    name: "pandigitalProducts",
    func: function() {
      let pandigitalProducts = [];
      for (let i = 1; i < 9999; i++) {
        for (let j = 1; j < 99; j++) {
          let product = i * j;
          let allDigits = String(i) + String(j) + String(product);
          if (allDigits.length !== 9) {
            continue;
          }
          let digitArr = allDigits.split("").sort((a,b) => a > b ? 1 : -1).join("");
          if (digitArr === "123456789") {
            let pan = {};
            pan.mult1 = i;
            pan.mult2 = j;
            pan.prod = product;
            if(!pandigitalProducts.some((e) => (e.mult1 === pan.mult2 && e.mult2 === pan.mult1) || e.prod === pan.prod)){
              pandigitalProducts.push(pan);
            }
          }
        }
      }

      let sum = 0;
      for(let i = 0; i < pandigitalProducts.length; i++){
        sum += pandigitalProducts[i].prod;
      }
      console.log(pandigitalProducts);
      return sum;
    }
  },
  {
    name: "digitalCancellingFractions",
    func: function() {
      let commonDenom = 1;
      let commonNumer = 1;
      for(let i = 10; i < 99; i++){
        for(let j = 10; j < 99; j++){
          let frac = 0;
          let simpleFrac = 0;
          if(i === j){
            continue;
          }
          else if(i % 10 === Math.floor(j / 10)){
            frac = i / j;
            simpleFrac = Math.floor(i / 10) / (j % 10);
            if(frac === simpleFrac){
              commonNumer *= i;
              commonDenom *= j;
            }
          }
        }
      }
      return commonDenom/commonNumer;
    }
  },
  {
    name: "digitFactorials",
    func: function() {
      let sum = 0;
      for(let i = 10; i < 99999; i++){
        let factorialSum = 0;
        let num = i;
        while(num > 0){
          factorialSum += helperModule.factorial(num % 10);
          num = Math.floor(num / 10);
        }
        if(factorialSum === i){
          sum += i;
        }
      }
      return sum;
    }
  },
  {
    name: "circularPrimes",
    func: function(limit = 1000000) {
      let circPrimes = [];
      for(let i = 2; i < limit; i++){
        if(!helperModule.checkPrime(i)){
          continue;
        }
        let rotateNum = String(i);
        let isCircP = true;
        for(let j = 0; j < rotateNum.length; j++){
          if(!helperModule.checkPrime(parseInt(rotateNum,10))){
            isCircP = false;
            break;
          }
          rotateNum = rotateNum.slice(1,rotateNum.length) + rotateNum.slice(0,1);
        }
        if(isCircP){
          circPrimes.push(i);
        }
      }
      return circPrimes.length;
    }
  },
  {
    name: "doubleBasePalindromes",
    func: function(limit = 1000000) {
      let sum = 0;
      for(let i = 1; i < limit; i++){
        let baseTen = i.toString();
        let baseTwo = i.toString(2);
        if(helperModule.checkPalindrome(baseTen) && helperModule.checkPalindrome(baseTwo)){
          sum += i;
        }
      }
      return sum;
    }
  },
  {
    name: "truncatablePrimes",
    func: function() {
      let sum = 0;
      for(let i = 11; i < 1000000; i++){
        let leftTrunc = i.toString();
        let rightTrunc = i.toString();
        let isTruncPrime = true;
        for(let j = 0; j < i.toString().length; j++){
          if(!helperModule.checkPrime(parseInt(leftTrunc,10)) || !helperModule.checkPrime(parseInt(rightTrunc,10))){
            isTruncPrime = false;
            break;
          }
          leftTrunc = leftTrunc.slice(0,leftTrunc.length - 1);
          rightTrunc = rightTrunc.slice(1,rightTrunc.length);
        }
        if(isTruncPrime){
          sum += i;
        }
      }
      return sum;
    }
  },
  {
    name: "pandigitalMultiples",
    func: function() {
      let largestPan = 0;
      for(let i = 1; i < 10000; i++){
        let allProds = "";
        let n = 1;
        while(allProds.length < 9){
          allProds = allProds.concat(String(i * n));
          n++;
        }
        if(allProds.split("").sort((a,b) => a > b ? 1 : -1).join("") === "123456789"){
          console.log(allProds);
          if(parseInt(allProds,10) > largestPan){
            largestPan = parseInt(allProds,10);
          }
        }
      }
      return largestPan;
    }
  },
  {
    name: "integerRightTriangles",
    func: function(p_limit = 1000) {
      let maxP = 0;
      let maxSol = 0;
      for(let p = 12; p <= p_limit; p++){
        let solutions = [];
        for(let a = 1; a < p/2; a++){
          for(let b = a; a+b < p; b++){
            let c = p - (a + b);
            if(Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)){
              let sol = {};
              sol.a = a;
              sol.b = b;
              sol.c = c;
              solutions.push(sol);
            }
          }
        }
        if(solutions.length > maxSol){
          maxSol = solutions.length;
          maxP = p;
        }
      }
      return maxP;
    }
  },
  {
      name: "champernownesConstant",
      func: function(limit = 1000000){
        let fractPart = "";
        let count = 1;
        while(fractPart.length < limit){
          fractPart = fractPart.concat(count.toString());
          count++;
        }
        let digitProd = 1;
        for(let i = 1; i <= limit; i *= 10){
          digitProd *= parseInt(fractPart.charAt(i - 1),10);
        }
        return digitProd;
      }
  }
];

export default allSolutions;