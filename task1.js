let i = process.argv[2],
    a = process.argv[3],
    b = process.argv[4];

let check = () => {
  if (+a > 36 || +b > 36 || +a < 1 || +b < 1 || +i < 1 || +i > 10000) {
    return 1;
  }
return 0;
}

let transNum = (i, a, b, check) => {
  if (check(i, a, b)){
    return "Не удовлетворяет условию..."
  }
  let des = parseInt(i, a);
  return des.toString(b);
}

process.stdout.write(transNum(i, a, b, check));