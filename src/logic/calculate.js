import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  switch (buttonName) {
    case '+/-':
      if (!operation) {
        total *= -1;
      } else {
        next *= -1;
      }
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '%':
      if (!operation && total) {
        total = operate(total, '0', '%');
      }
      if (operation && next) {
        next = operate(next, '0', '%');
      } else {
        break;
      }
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
      operation = buttonName;
      break;
    case '=':
      if (total && next) {
        total = operate(total, next, operation);
        operation = null;
        next = null;
      }
      break;
    default:
      if (!operation) {
        if (total && buttonName === '.' && total.includes('.')) {
          break;
        }
        total = total ? total.concat(buttonName) : (total = buttonName);
      } else {
        if (next && buttonName === '.' && next.includes('.')) {
          break;
        }
        next = next ? next.concat(buttonName) : (next = buttonName);
      }
  }
  const data2 = { total, next, operation };
  return data2;
};

export default calculate;
