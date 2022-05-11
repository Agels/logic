const array = [4, 2, 6, 88, 3, 11];
let low = array[0];
let high = array[0];
for (let i = 0; i < array.length; i++) {
  if (low > array[i]) {
    low = array[i];
  }
}

for (let i = 0; i < array.length; i++) {
  if (high < array[i]) {
    high = array[i];
  }
}
console.log(` ${array}
 low : ${low}, high ${high}`);
