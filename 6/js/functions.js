const isPalindrom = (string) => {
  const tempString = string.toLowerCase();

  return tempString === [...tempString].reverse().join('');
};

isPalindrom('ДовОд');

const extractNumber = (string) => {
  if (!string) {
    return string;
  }
  return parseInt(string.replace(/\D+/g, ''), 10);
};

extractNumber('2023 год');

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

myPadStart('1', 2, '0');

const isLessOrEqual = (string, length) => (string.length <= length);

isLessOrEqual('проверяемая строка', 20);
