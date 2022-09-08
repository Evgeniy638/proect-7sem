module.exports = function task28() {
  const arr = [];
  const step = 1.2;

  for (let x = -12; x <= 5; x += step) {
    //  z=sin(x)-5cos(x-2) 
    const z = Math.sin(x) - 5 * Math.cos(x - 2);
    
    if (z > 0) {
      arr.push(z);
    }
  }

  return arr;
}
