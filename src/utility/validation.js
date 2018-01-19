const validation = (val, rules) => {
  isValid: true;
  for (let rule in rules) {
    switch (rule) {
      case 'isEmail':
        isValid = isValid && emailValidator(val);
      case 'minLength':
        isValid = isValid && minLengthValidator(val, rules[rule]);
      case 'equalTo':
        isValid = isValid && equalToValidator(val, rules[rule]);
      default:
        isValid: true;
    }
  }
  return isValid;
};

const emailValidator = val => {};
const minLengthValidator = (val, minLength) => {};
const equalToValidator = (val, checkValue) => {};
