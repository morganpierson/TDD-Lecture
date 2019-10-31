function yellSomething(string) {
  if(arguments.length !== 1 || typeof string !== 'string') {
    return "Please input a string."
  }
  return string.toUpperCase();
};

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function pow(num1, num2) {
  let result = num1;
  for(let i = 1; i < num2; i++) {
    result = num1 * result;//625
  }
  return result;
}

function longestWord (arr) {
  let wrongType = arr.some(element => typeof element !== 'string');
  if (!arr.length || wrongType) {
    return 'Please input an array of strings!';
  }

  else if (arr.length === 1) { 
    return arr[0];
  };
  
  let longest = arr.reduce((wordA, wordB) => {
    return wordA.length > wordB.length ? wordA : wordB;
  });
  return longest;
}