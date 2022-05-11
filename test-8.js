function multiple(int) {
  for (let i = 1; i <= int; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("eduwork");
    } else {
      if (i % 3 === 0) {
        console.log("edu");
      } else if (i % 5 === 0) {
        console.log("work");
      } else {
        console.log(i);
      }
    }
  }
}

multiple(15);
