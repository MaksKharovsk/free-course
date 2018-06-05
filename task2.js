let d = process.argv[2],
    m = process.argv[3],
    y = process.argv[4];

let monthNumbers = {
  января: "0",
  февраля: "1",
  марта: "2",
  апреля: "3",
  мая: "4",
  июня: "5",
  июля: "6",
  августа: "7",
  сентября: "8",
  октября: "9",
  ноября: "10",
  декабря: "11"
};

let check = (d, y) => {
  if (d < 1 || d > 31 || y < 1 || y > 2999){
    return true;
  }
  return false;
}

let calcNumbDays = (check) => {
  if (check(d, y)) return;
  
  let date = new Date(y, monthNumbers[m], d);
  let nextYerDate = new Date(y, 11, 31);
  return (nextYerDate - date) / (1000 * 60 * 60 * 24);
}

process.stdout.write(calcNumbDays(check));
