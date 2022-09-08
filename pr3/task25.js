module.exports = function task25(A) {
  if (A === 0) {
    throw new Error('A не может быть равен 0');
  } 

  const arr = [];
  const step = 0.75;

  for (let x = -1.25; x < 8; x += step) {
    // y=(4x-3x+tg(x))/А
    const y = (4 * x - 3 * x + Math.tan(x)) / A;
    arr.push(y);
  }

  return arr;
}
