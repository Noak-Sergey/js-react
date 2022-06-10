'use strict';

function direction(facing, turn) {
    const arr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = arr.indexOf(facing); //точка отчета
    let exit = (Math.round(turn / 45) % 8); //сколько нужно отступить от точки отсчета

    const sum = index + exit;

    if (sum < 0) {
        return console.log(arr[sum + 8]);
    }
    if (sum >= 8) {
        return console.log(arr[sum - 8]);
    }

    return console.log(arr[sum], exit, index);
}
direction("N", -450);

//BestPractice
// function direction(facing, turn){
//     const arr = "N NE E SE S SW W NW".split(" ");
//     return arr[(arr.indexOf(facing) + Math.floor(turn / 45) + 1080) % 8];
//   }

//==========================================
const data = [[45, 12],[55,21],[19, -2],[104, 20]];

function openOrSenior(data) {
    let output = [];

    data.forEach(i => {
        if (i[0] >= 55 && i[1] > 7) {
            output.push('Senior');
        } else {
            output.push('Open');
        }
    });

    return console.log(output);
}