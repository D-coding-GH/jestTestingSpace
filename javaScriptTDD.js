//.......Banking app, deposit and withdraw from account, prints updated statement,
//.......includeds date of transactions
//    DATE   ||AMOUNT||BALANCE
// 14/9/2021 || -500 || 1900
//    DATE   ||AMOUNT||BALANCE
// 14/9/2021 || 1000 || 2900

//.....test 1


let amount = [];
let balance = 50;

const transactionDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear();
  return `${days}/${months}/${years}`;
};
const date = transactionDate();

const deposit = (depo) => {
  if (depo < 0.01 || depo > 10000) {
    console.log('you can only depo between 0.01 and 10000');
    return;
  } else {
    amount.push(depo);

    balance += depo;

    writeStatement(date, depo, balance);
  }
  return balance;
};

const withDraw = (depo) => {
  if (depo < 0.01 || depo > 10000) {
    console.log('you can only withdraw between 0.01 and 10000');
    return;
  } else {
    amount.push(depo);

    balance -= depo;

    writeStatement(date, '-' + depo, balance);
  }

  return balance;
};

function writeStatement(date, depo, balance) {
  let statement = [];

  let logStatement = {
    date: date,
    depo: depo,
    balance: balance,
  };

  statement.push(logStatement);

  for (const print of statement) {
    console.log(`                 DATE   ||AMOUNT||BALANCE
              ${print.date} || ${print.depo} || ${print.balance}`);
  }
  return;
}


deposit(2000);
withDraw(1000);


//.....sum up all the numbers

//.....test 2

const sumUp = (...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};
console.log(sumUp(1, 5, 3, 7, -4, 6, 10));

//...Fahrenheit to Celsius, Celsius to Fahrenheit converter functions

//...test 2 and 3

let toCelsius = (fah) => {
  return (5 / 9) * (fah - 32);
};
console.log(toCelsius(45));

let toFahrenheit = (cel) => {
  return (cel * 9) / 5 + 32;
};
console.log(toFahrenheit(60));

//....check for pangram

//....test 4

const checkLetters = (c) => {
  var seen = [];
  var count = 0;
  var chars = c.toLowerCase();
  for (var i = 0; i < chars.length; i++) {
    if (/[a-z]/g.test(chars[i])) {
      if (!seen[chars[i]]) {
        count++;
      }
      seen[chars[i]] = true;
    }
  }
  return count === 26;
};



console.log(checkLetters('The quick brown fox jumps over the lazy dog'));

//....sqaure the numbers within the array

//.....test 5

function squareSum(numbers) {
  return numbers
    .map(function (n) {
      return n * n;
    })
    .reduce(function (prev, cur) {
      return prev + cur;
    });
}

(module.exports = sumUp),
  toFahrenheit,
  toCelsius,
  checkLetters,
  squareSum,
  transactionDate,
  deposit,
  withDraw,
  writeStatement;
