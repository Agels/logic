const data = [1, 4, 7, 9, 12];
const low = 2;
const high = 15;

let newArr = [];
let total = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] > low && data[i] < high) {
    newArr.push(data[i]);
    total++;
  }
}
console.log(total);
