const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased(){
  
  const result = tutorials.map((str) => {
    return convertToTitleCase(str);
  })

  return result;

}



function convertToTitleCase(str){
  
  // covert string into array with comma and separated elements 
  let strSplit = str.split(' ');

  let newstrSplit = [];
  for (let word of strSplit){
    // covert to UpperCase the first letter of each element
    let wordTitleCased;
    wordTitleCased = word[0].toUpperCase() + word.slice(1);
    newstrSplit.push(wordTitleCased);
  }

  // convert array into string without comma and separated by space
  let joinedStr = newstrSplit.join(" ");

  return joinedStr;    

}

