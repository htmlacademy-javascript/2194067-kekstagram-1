const isPalindrome = (string) => {
  const tempString = string.toLowerCase();

  return tempString === [...tempString].reverse().join('');
};

isPalindrome('ДовОд');

const extractNumber = (string) => {

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

myPadStart('q', 4, 'werty');

const isLessOrEqual = (string, length) => (string.length <= length);

isLessOrEqual('text', 3);
