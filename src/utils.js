function codeValidation(code) {
  const letter = /[a-zA-Z]/;
  const number = /[0-9]/;
  const valid = number.test(code) && letter.test(code);
  return valid;
}

module.exports = {
  codeValidation,
};
