
function timesInt(number) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }
  const newArr = arr.reduce((curr, prev) => {
    return curr * prev;
  });
  console.log(newArr);
}

timesInt(8);
