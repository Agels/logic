function digitvalue(digit) {
  let split = digit.split("");
  let removeSplit = ["A", ".", "-"];

  let newSplit = split.filter(
    (item) =>
      item !== removeSplit[0] &&
      item !== removeSplit[1] &&
      item != removeSplit[2]
  );

  let result = "";
  let resultx = "";
  for (let i = 0; i <= newSplit.length - 1; i++) {
    result += newSplit[i];
    resultx += newSplit[i];
    for (let p = 1; p < newSplit.length - i; p++) {
      result += 0;
    }
    result += "\n";
  }
  console.log(resultx);
  console.log(result);
}

digitvalue("9.86-A5.321");
