module.exports = function task7(x) {
  if (x < -1 || x >= 0 && x <= 1) {
    throw new Error(`${x} не входящит в область определения функции`);
  }

  //  y=ln(x-1/x)
  return Math.log(x - 1/x);
}
