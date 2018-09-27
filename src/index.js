module.exports = function solveEquation(equation) {
  let indexEquation = equation.split(' ');
  let a = indexEquation[0];
  let b = indexEquation[3] + indexEquation[4];
  let c = indexEquation[7] + indexEquation[8];

  let d = b * b - 4 * a * c;

  x1 = Math.round((- b + Math.sqrt(d)) / (2 * a));
  x2 = Math.round((- b - Math.sqrt(d)) / (2 * a));

  let newArray = [x1, x2];

  return newArray.sort(function(a, b) {return a - b})
}