import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);
  let r = 0;
  switch (operation) {
    case '+':
      r = x.plus(y);
      break;
    case '-':
      r = x.minus(y);
      break;
    case 'x':
      r = x.times(y);
      break;
    case '÷':
      r = x.div(y);
      break;
    case '%':
      r = x.div(100);
      break;
    default:
      r = 'fail';
  }
  return r.toString();
};

export default operate;
