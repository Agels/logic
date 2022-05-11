function number(num) {
  let obj = {
    0: "puluh",
    1: "satu",
    2: "dua",
    3: "tiga",
    4: "empat",
    5: "lima",
    6: "enam",
    7: "tujuh",
    8: "delapan",
    9: "sembilan"
  };
  let int = 0;

  let intArr = String(num).split("");
  if (num === 100) {
    int = "seratus";
  } else if (num > 100) {
    int = "silahkan masukan bilangan 1-100";
  } else {
    if (num % 10 === 0) {
      int = obj[intArr[0]] + " puluh ";
      if (num === 10) {
        int = "sepuluh";
      }
    } else {
      if (num === 11) {
        int = "sebelas";
      } else {
        if (num > 10) {
          int = obj[intArr[0]] + " puluh " + obj[intArr[1]];
          if (num > 10 && num < 20) {
            int = obj[intArr[1]] + " belas ";
          }
        } else {
          int = obj[num];
        }
      }
    }
  }

  console.log(int);
}

number(12);
