//
let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for(let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n' //перенос строки
}

console.log(result);
//------------------------------------------
function firstTask() {
    
    for ( let i = 5; i < 11; i++) {
        console.log(i)
    }
 console.log(i)
}
//------------------------------------------
for( let i = 20; i > 9; i--) {
    if(i === 13) break
    console.log(i)
}
//-------------------------------------------
repit:for ( let i = 1; i < 11; i++) {
    if(i%2 === 0) {
        console.log(i);
    }
    continue repit
}
//-------------------------------------------
let num = 2;
    while(num < 16){
        if (num % 2 === 0) {
           num++;
           continue;
       } else {
           console.log(num);
           num++;          
       }     
    }
//---------------------------------------------------
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    //console.log(data[2] + " - done")
    for( let i = 0; i < data.length; i++) {
        if(typeof(data[i]) === "number") {
            data[i] = (data[i] * 2)
        } else if (typeof(data[i]) === "string"){
            data[i] = (data[i] + " - done")
        }
    }
    console.log(data)
//-------------------------------------------------
const dataN = [5, 10, 'Shopping', 20, 'Homework'];
    const resultRevers = [];

    // Пишем решение вот тут
    for(let i = (dataN.length - 1); i >= 0; i--){
        resultRevers.push(dataN[i])
    }
    console.log(resultRevers)
//-------Нарисовать фигуру----------------------
let res = '';
const lines = 5;
for(let i = 0; i <= lines; i++) {

    for( let j = 0; j < lines-i; j++) {
        res += " ";
    }

    for( let k = 0; k < i*2+1; k++) {
        res += "*";
    }
    res += "\n";
}
console.log(res);
