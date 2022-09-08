module.exports = function task4() {
  const arr = [];
  const step = 0.9;

  for (let x = 3; x <= 8; x += step) {
    //  z=ln(x)+tg(2x)
    const z = Math.log(x) + Math.tan(2 * x);
    
    if (z > 1) {
      arr.push(z);
    }
  }

  return arr;
}
