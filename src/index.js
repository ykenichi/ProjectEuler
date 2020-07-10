import "./styles.css";
import $ from "jquery";

var p022_names;
readFiles();

function readFiles() {
  $.get(
    "./resources/p022_names.txt",
    function(data) {
      p022_names = data.replace(/"/g, "").split(",");
    },
    "text"
  );
}

function checkPrime(num) {
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

function genTriplets(m, n) {
  if (m <= n) {
    return;
  }
  let result = {};
  result.a = Math.pow(m, 2) - Math.pow(n, 2);
  result.b = 2 * m * n;
  result.c = Math.pow(m, 2) + Math.pow(n, 2);
  return result;
}

function countDivisors(num) {
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
function sumDivisors(num) {
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
function collatzSeq(num) {
  return num % 2 === 0 ? num / 2 : 3 * num + 1;
}

// Used in: P15, for binCoeff function
// Recursive implementation of factorial function
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Used in: P20
// An alternative to the recursive factorial implementation above, useful for huge factorial values due to bigint class.
function bigFactorial(n) {
  let f = BigInt(1);
  n = BigInt(n);
  while (n > 1) {
    f = f * --n;
  }
  return f;
}

// Used in: P15
// Computes the binary coefficient for a given value of n and k
function binCoeff(n, k) {
  if (n < k) {
    return;
  }
  return factorial(n) / (factorial(k) * factorial(n - k));
}

// Used in: P17
// Given a number greater than one and less than 10000, will find the length of the number when written out in english
function getWordLength(n) {
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
function getWord(n) {
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

function checkAbundant(num) {
  return sumDivisors(num) > num ? true : false;
}

function nextPermutation(array) {
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

function quadraticPrime(a, b, n) {
  let result = Math.pow(n, 2) + a * n + b;
  return checkPrime(Math.abs(result));
}

function sumOfPowers(num, pow) {
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

function checkPalindrome(input){
  if(typeof input !== 'string'){
    input = input.toString();
  }
  return input === input.split("").reverse().join("");
}

// input values for problem 8
const p8_series = `
73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450`
  .split(/\D/)
  .join("");

// input values for problem 11
const p11_grid = `08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48`.split(/\D/);

//input values for problem 13
const p13_numbers = `37107287533902102798797998220837590246510135740250
46376937677490009712648124896970078050417018260538
74324986199524741059474233309513058123726617309629
91942213363574161572522430563301811072406154908250
23067588207539346171171980310421047513778063246676
89261670696623633820136378418383684178734361726757
28112879812849979408065481931592621691275889832738
44274228917432520321923589422876796487670272189318
47451445736001306439091167216856844588711603153276
70386486105843025439939619828917593665686757934951
62176457141856560629502157223196586755079324193331
64906352462741904929101432445813822663347944758178
92575867718337217661963751590579239728245598838407
58203565325359399008402633568948830189458628227828
80181199384826282014278194139940567587151170094390
35398664372827112653829987240784473053190104293586
86515506006295864861532075273371959191420517255829
71693888707715466499115593487603532921714970056938
54370070576826684624621495650076471787294438377604
53282654108756828443191190634694037855217779295145
36123272525000296071075082563815656710885258350721
45876576172410976447339110607218265236877223636045
17423706905851860660448207621209813287860733969412
81142660418086830619328460811191061556940512689692
51934325451728388641918047049293215058642563049483
62467221648435076201727918039944693004732956340691
15732444386908125794514089057706229429197107928209
55037687525678773091862540744969844508330393682126
18336384825330154686196124348767681297534375946515
80386287592878490201521685554828717201219257766954
78182833757993103614740356856449095527097864797581
16726320100436897842553539920931837441497806860984
48403098129077791799088218795327364475675590848030
87086987551392711854517078544161852424320693150332
59959406895756536782107074926966537676326235447210
69793950679652694742597709739166693763042633987085
41052684708299085211399427365734116182760315001271
65378607361501080857009149939512557028198746004375
35829035317434717326932123578154982629742552737307
94953759765105305946966067683156574377167401875275
88902802571733229619176668713819931811048770190271
25267680276078003013678680992525463401061632866526
36270218540497705585629946580636237993140746255962
24074486908231174977792365466257246923322810917141
91430288197103288597806669760892938638285025333403
34413065578016127815921815005561868836468420090470
23053081172816430487623791969842487255036638784583
11487696932154902810424020138335124462181441773470
63783299490636259666498587618221225225512486764533
67720186971698544312419572409913959008952310058822
95548255300263520781532296796249481641953868218774
76085327132285723110424803456124867697064507995236
37774242535411291684276865538926205024910326572967
23701913275725675285653248258265463092207058596522
29798860272258331913126375147341994889534765745501
18495701454879288984856827726077713721403798879715
38298203783031473527721580348144513491373226651381
34829543829199918180278916522431027392251122869539
40957953066405232632538044100059654939159879593635
29746152185502371307642255121183693803580388584903
41698116222072977186158236678424689157993532961922
62467957194401269043877107275048102390895523597457
23189706772547915061505504953922979530901129967519
86188088225875314529584099251203829009407770775672
11306739708304724483816533873502340845647058077308
82959174767140363198008187129011875491310547126581
97623331044818386269515456334926366572897563400500
42846280183517070527831839425882145521227251250327
55121603546981200581762165212827652751691296897789
32238195734329339946437501907836945765883352399886
75506164965184775180738168837861091527357929701337
62177842752192623401942399639168044983993173312731
32924185707147349566916674687634660915035914677504
99518671430235219628894890102423325116913619626622
73267460800591547471830798392868535206946944540724
76841822524674417161514036427982273348055556214818
97142617910342598647204516893989422179826088076852
87783646182799346313767754307809363333018982642090
10848802521674670883215120185883543223812876952786
71329612474782464538636993009049310363619763878039
62184073572399794223406235393808339651327408011116
66627891981488087797941876876144230030984490851411
60661826293682836764744779239180335110989069790714
85786944089552990653640447425576083659976645795096
66024396409905389607120198219976047599490197230297
64913982680032973156037120041377903785566085089252
16730939319872750275468906903707539413042652315011
94809377245048795150954100921645863754710598436791
78639167021187492431995700641917969777599028300699
15368713711936614952811305876380278410754449733078
40789923115535562561142322423255033685442488917353
44889911501440648020369068063960672322193204149535
41503128880339536053299340368006977710650566631954
81234880673210146739058568557934581403627822703280
82616570773948327592232845941706525094512325230608
22918802058777319719839450180888072429661980811197
77158542502016545090413245809786882778948721859617
72107838435069186155435662884062257473692284509516
20849603980134001723930671666823555245252804609722
53503534226472524250874054075591789781264330331690`.split(/\n/);

// input values for problem 18
const p18_triangle = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`.split(/\n/);

// array that holds all of the solutions to project euler, starting from problem 1
const allFunctions = [
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
        if (checkPrime(counter)) {
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
    func: function(num = 13, series = p8_series) {
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
          let triplet = genTriplets(m, n);
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
        sum += checkPrime(i) ? i : 0;
      }
      return sum;
    }
  },
  {
    name: "largestProductInGrid",
    func: function(rawGrid = p11_grid, dim = 20) {
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
            /*
            console.log(max);
            nums[0] = grid[i][j+3];
            nums[1] = grid[i+1][j+2];
            nums[2] = grid[i+2][j+1];
            nums[3] = grid[i+3][j];
            console.log(nums); */
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
        divCount = countDivisors(triNum);
        counter++;
      }
      return triNum;
    }
  },
  {
    name: "largeSum",
    func: function(num = 50, size = 10, digits = p13_numbers) {
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
          collatz = collatzSeq(collatz);
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
      return binCoeff(num * 2, num);
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
        count += getWordLength(i).join("").length;
      }
      return count;
    }
  },
  {
    name: "maxPathSum",
    func: function(triangle = p18_triangle) {
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
      let f = String(bigFactorial(num));
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
        let s = sumDivisors(i);
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
    func: function(names = p022_names) {
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
        if (checkAbundant(i)) {
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
        digits = nextPermutation(digits);
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
          while (quadraticPrime(a, b, n)) {
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
        if (sumOfPowers(i, pow)) {
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
          factorialSum += factorial(num % 10);
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
        if(!checkPrime(i)){
          continue;
        }
        let rotateNum = String(i);
        let isCircP = true;
        for(let j = 0; j < rotateNum.length; j++){
          if(!checkPrime(parseInt(rotateNum,10))){
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
        if(checkPalindrome(baseTen) && checkPalindrome(baseTwo)){
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
          if(!checkPrime(parseInt(leftTrunc,10)) || !checkPrime(parseInt(rightTrunc,10))){
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
  }
];

$(document).ready(function() {
  $("#title").append("Project Euler Solutions for 1 - " + allFunctions.length);

  // loops through all of the available functions in allFunctions and lists them in the page
  // will not execute any function unless the corresponding button is clicked
  for (let i = 0; i < allFunctions.length; i++) {
    //let result = allFunctions[i].func();
    let name = allFunctions[i].name;
    //$("#answers").append("<li>" + name + ": " + result + "</li>");
    $("#answers").append(
      '<li class=".answerRow" name="' +
        name +
        '"><span id="' +
        name +
        '">' +
        (i + 1) +
        ") " +
        name +
        ': </span><button class="runFunction" value="' +
        name +
        '">Run Function</button></li>'
    );
  }

  //runs whenever one of the function buttons is clicked, finds the corresponding function and executes it off the array
  $(".runFunction").click(function() {
    let value = $(this).val();
    console.log(value);
    let selectedFunc = allFunctions.find(e => e.name === value);

    let t0 = performance.now();
    let solution = selectedFunc.func();
    let t1 = performance.now();

    //check if an answer label was already added, so theres no duplicate values
    if ($("#" + value + "_answer").length !== 0) {
      $("#" + value + "_answer").remove();
    }

    $("#" + value).append(
      '<label class="answerStyle" id="' +
        value +
        '_answer">' +
        solution +
        '<label class="timeStyle"> (Took ' +
        Math.round(t1 - t0) +
        " ms)</label></label>"
    );
  });
});
