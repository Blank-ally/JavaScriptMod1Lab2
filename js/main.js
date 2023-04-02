// Stith Mod 1 : Lab 2


//IPO Chart

console.group('Lab 2 IPO chart');

console.group('input');
console.log('Input 1: Text from user')
console.log('Input 2: Text from user')
console.log('Button : Calculate')
console.groupEnd()

console.group('processes');
console.log('Covert text to numbers  ')
console.log('Add the two numbers ')
console.groupEnd()

console.group('output');
console.log('Display the result')
console.groupEnd()

console.groupEnd()

//button click event

function calculator(){
// we can use constants because the express will always be the same but the document will give us
// elements

//number converts to number but best practice is to just have the text box input declared as a number
    const inputOneElementVal = Number(document.getElementById('input1').value);
    const inputTwoElementVal = Number(document.getElementById('input2').value);

    //addition
    const sumElements = document.getElementById('resultSum');
    sumElements.value = inputOneElementVal + inputTwoElementVal;


    //subtraction
    const differenceElements = document.getElementById('resultDifference');
    differenceElements.value = inputOneElementVal - inputTwoElementVal;

    //multiplication
    const productElements = document.getElementById('resultProduct');
    productElements.value = inputOneElementVal * inputTwoElementVal;

    //division
    const quotientElements = document.getElementById('resultQuotient');
    quotientElements.value = inputOneElementVal / inputTwoElementVal;

    // modulus
    const remainderElements = document.getElementById('resultRemainder');
     remainderElements.value = inputOneElementVal % inputTwoElementVal;

// button clicks
     const clickElement = document.getElementById('resultClicks');
    let clickElementValue = Number(clickElement.value);
      clickElement.value = ++clickElementValue;




}