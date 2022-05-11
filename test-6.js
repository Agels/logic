const data = [1, 4, 7, 9, 12];
const low = 2;
const high = 15;

const newData = data.filter((e) => e > low && e < high);

console.log(newData);
