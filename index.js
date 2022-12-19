// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Insert Dashes</h1>`;

/**
 * Transform a given sentence into a new one with dashes between each two consecutive letters.
 * Example:
 * For inputString = "aba caba", the output should be insertDashes(inputString) = "a-b-a c-a-b-a".
 * Hints:
 * - join()
 * - split()
 */
function insertDashes(arr) {
  // write code here
  let retStr = arr.split('').join('-').split(' ');
  return retStr
    .map((s) => {
      return s.startsWith('-') && s.endsWith('-')
        ? s.substring(s.indexOf('-') + 1, s.lastIndexOf('-'))
        : s.startsWith('-')
        ? s.substring(s.indexOf('-') + 1)
        : s.endsWith('-')
        ? s.substring(0, s.lastIndexOf('-'))
        : s.substring(0);
      // return s.indexOf('-');
    })
    .join(' ');

  /* SOLUTION 2 - by Oshka */
  // return arr
  //   .split(' ')
  //   .map((word) => word.split('').join('-'))
  //   .join(' ');
  /* SOLUTION 3 - by Yannik */
  // let finalString = [];
  // arr.split(' ').forEach((item) => finalString.push(item.split('').join('-')));
  // return finalString.join(' ');
  /* SOLUTION 4 - by Dillon */
  // const splitStr = arr.split(' ');
  // let dashedStr = ``;
  // // console.log(splitStr)
  // for (let word in splitStr) {
  //   dashedStr += splitStr[word].split('').join('-') + ' ';
  // }
  // return dashedStr.trim();
  /* SOLUTION 5 - by Sedef - not yet completely correct */
  // let charsArray = arr.split("");
  //   charsArray.splice(3,1)
  //   charsArray = charsArray.join("-")
  //   charsArray = addSpace(charsArray,5," ");
  //   function addSpace(str,index,chr) {
  //       return str.substring(0, index) + chr + str.substring(index+1);
  //   }
  //   return charsArray;
}

console.log(insertDashes('aba caba'));
console.log(insertDashes('sims the fid del'));
