let i = process.argv[2],
    a = process.argv[3],
    b = process.argv[4];

let check = () => {
    if (+a > 36 || +b > 36 || +a < 2 || +b < 2 || +i < 1 || +i > 10000) {
        return 1;
    }
return 0;
}

let sortArray = (a, b) => {
    return b - a;
}

let checkBase = (sortArray) => {
    let checkNum = i.split("").sort(sortArray);
    if (checkNum[0] >= a){
        return true;
    }
    return false;
}

let transNum = (i, a, b, check, checkBase, sortArray) => {
    if (check(i, a, b)){
        return "Входные данные не удовлетворяют условию..."
    }

    if (checkBase(sortArray)){
        return "Введенное число не соответствует системе счисления..."
    }

    let des = parseInt(i, a);
    return des.toString(b);
}

process.stdout.write(transNum(i, a, b, check));
