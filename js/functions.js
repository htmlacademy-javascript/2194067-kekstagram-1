const isPalindrom = (string) => {
  const tempString = string.toLowerCase();

  // let reverseString ='';
  // for (let i = tempString.length - 1; i >= 0; i--) {
  //   reverseString += tempString.at(i);
  // }
  // return tempString === reverseString;

 return tempString === [...tempString].reverse().join('');
};

isPalindrom('довод');

const extractNumber = (string) => {

  /*
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
  */
if (!string) {
  return string;
}
return parseInt(string.replace(/\D+/g,''), 10);

};

extractNumber('text123');

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

/*
const isLessOrEqual = (string, length) => {
  if (string.length <= length) {
    return true;
  }
  return false;
};
*/
const isLessOrEqual = (string, length) => (string.length <= length);

isLessOrEqual('text', 3);
