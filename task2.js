let d = process.argv[2],
    m = process.argv[3],
    y = process.argv[4];

function calcDays(d, m, y){

  const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  
  let getMonthIndex = (m, months) => {
    let monthIndex;
    months.forEach(function(item, index){
      if (m == item) monthIndex = index;
    });
    return monthIndex;
  }
  
  let date = new Date(y, getMonthIndex(m, months), +d + 1);
  let nextDate = new Date(+y + 1, 11, 31);  
  
  return (nextDate - date) / (1000 * 60 * 60 * 24);
}

process.stdout.write(calcDays(d, m, y));
