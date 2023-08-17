const isPalindrome = (string) => {
  const tempString = string.toLowerCase();

<<<<<<< HEAD
  return tempString === [...tempString].reverse().join('');
=======
 return tempString === [...tempString].reverse().join('');
>>>>>>> 71899b8bde292f374f6be789d7c336271063de1b
};

isPalindrome('ДовОд');

const extractNumber = (string) => {

<<<<<<< HEAD
  if (!string) {
    return string;
  }
=======
if (!string) {
  return string;
}
>>>>>>> 71899b8bde292f374f6be789d7c336271063de1b
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

myPadStart('q', 4, 'werty');

const isLessOrEqual = (string, length) => (string.length <= length);

isLessOrEqual('text', 3);
