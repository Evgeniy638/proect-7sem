module.exports = function task1() {
  const arr = [];
  const step = 1.2;

  for (let x = -5; x <= 12; x += step) {
    //  y=sin(x)+5cos(x-2)
    const y = Math.sin(x) + 5 * Math.cos(x - 2);
    
    if (y > 0) {
      arr.push(y);
    }
  }

  return arr;
}
