let a = process.argv[2],
    b = process.argv[3];

let sumSeconds = +a + +b;

let secIn = [sumSeconds, 3600, 60, 1];

let timeDeclinations = [
  ["час", "часа", "часов"],
  ["минута", "минуты", "минут"],
  ["секунда", "секунды", "секунд"]
];

let check = (a, b) => {
  if (a < 1 || b < 1 || a > 100000 || b > 100000){
    return true;
  };
  return false;
}

let declinationTime = (num, timeDeclinations) => {
  num = num.toString(10);
  let x = +num[num.length - 1],
      y = +num[num.length - 2];
  return (
    ((x === 1) && (y !== 1)) ? timeDeclinations[0] : 
    ((x > 1 && (x < 5) && (y !== 1))) ? 
    timeDeclinations[1] : timeDeclinations[2]
  );
}

let transformTime = (declinationTime, check) => {
  if (check(a, b)){
    return "Не удовлетворяет условию";
  };
  
  let residue = 1,
      result  = "";
  
  for (let i = 0; (secIn.length - 1) > i; i++){
    let fullNum = secIn[i] * residue / secIn[i + 1];
    let num = Math.floor(fullNum);
    let timeName = declinationTime(num, timeDeclinations[i]);
    residue = fullNum - num;
    
    if ( num !== 0) {
      result += (num + " " + timeName + ((i < 2) ? " " : ""));
    } 
  }
  
  return result;
}

process.stdout.write(transformTime(declinationTime, check));