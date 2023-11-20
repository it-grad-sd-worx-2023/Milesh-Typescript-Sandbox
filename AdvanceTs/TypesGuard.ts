function isNumber(value: any): value is number {
    return typeof value === "number";
  }
  
  let xresult: any = 42;
  if (isNumber(xresult)) {
    // result is now treated as a number
    console.log(xresult + 10);
  }
  