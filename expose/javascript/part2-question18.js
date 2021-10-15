// part2-question18.js

let d = new Date();
let time = d.toLocaleTimeString();

let doRepeat = setInterval(printTime, 1000);

function printTime()
{
    console.log(time);
}