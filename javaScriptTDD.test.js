const { statement } = require('@babel/template');
const { test, expect } = require('@jest/globals');
const { describe } = require('yargs');
const transactionDate = require('./javaScriptTDD')
const deposit = require('./javaScriptTDD')
const withDraw = require('./javaScriptTDD')
const writeStatement = require('./javaScriptTDD')
const sumUp = require('./javaScriptTDD');
const toCelsius = require('./javaScriptTDD');
const toFahrenheit = require('./javaScriptTDD');
const checkLetters = require('./javaScriptTDD');
const squareSum = require('./javaScriptTDD');


//............................TEST SPACE

//...test 1: Bank Kata/App

test('test bank app', ()=>{

    'create transaction date',
    (date)=>{

    expect(transactionDate()).toEqual(new Date())
    expect(transactionDate(days)).toEqual(date.getDate())
    expect(transactionDate(months)).toEqual(date.getMonth()+1)
    expect(transactionDate(years)).toEqual(date.getFullYear())

    expect(transactionDate(days)).toEqual(`${days}/${months}/${years}`)    

    
}
    'test deposit and withdrawal',
    (depo)=>{
        expect(deposit(1000)).toBeGreaterThan(balance)
        expect(withDraw(10)).toBeLessThan(balance)
}

    'test correct amounts',
    (depo)=>{                                               
    expect(deposit(10001)).toThrow('you can only depo between 0.01 and 10000')

    expect(withDraw(10001)).toThrow('you can only depo between 0.01 and 10000')
}
    
    'test write statement properties',
    (logStatement)=>{
    expect(writeStatement(logStatement)).toHaveProperty(date,depo,balance);

    expect(writeStatement(date, depo, balance)).toEqual(console.log(`                 DATE   ||AMOUNT||BALANCE
    ${print.date} || ${print.depo} || ${print.balance}`));
}
})


//...test 2: sum all numbers

test('adds 1 + 2 + 3 + 7 +-4 + 6 + 10 to equal 28', () => {
  expect(sumUp(1, 5, 3, 7, -4, 6, 10)).toBe(28);
});

//...test 2 and 3 : Fahrenheit to Celsius, Celsius to Fahrenheit converter function

test('convert Celsius(45) to Fahrenheit to equal 7.222222222222222', () => {
  expect(toCelsius(5 / 9) * (45 - 32)).toEqual(7.222222222222222);
});

test('convert Fahrenheit(60) to Celsiu to eqaul 140', () => {
  expect(toFahrenheit((60 * 9) / 5 + 32)).toEqual(140);
});

//...test 4 : Check for Pangram

test('is a pangram present', () => {
  'testing %s for pangram',
    (c) => {
      expect(checkLetters(c)).toBeTruthy();
    };
});

//....test 5 : sqaure the numbers within the array

test('sqaure numbers from array', () => {
    'test',
    (numbers)=>{
  test.assertEquals(squareSum([1, 2]), 5);
  test.assertEquals(squareSum([0, 3, 4, 5]), 50);
}});
