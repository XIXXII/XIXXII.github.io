console.log('------------------- Part A ------------------- ');
const r1nets = (96+108+89) / 3;
const r1knicks = (88+91+110) / 3;

if(r1nets > r1knicks){
    console.log('Nets win the competition!');
}
else if(r1nets > r1knicks){
    console.log('Knicks win the competition!');
}
else{
    console.log('There is a draw!');
}

console.log('               For Bonus 1');
const r2netsOne = 97;
const r2netsTwo = 112;
const r2netsThree = 101;
const r2netsAvg = (r2netsOne+r2netsTwo+r2netsThree) / 3 ;
let over100Nets;
if(r2netsOne > 100 && r2netsTwo > 100 && r2netsThree > 100){
    over100Nets = true;
}
else{
    over100Nets = false;
}
const r2knicksOne = 109;
const r2knicksTwo = 95;
const r2knicksThree = 123;
const r2knicksAvg = (r2knicksOne+r2knicksTwo+r2knicksThree) / 3 ;
let over100Knicks;
if(r2knicksOne > 100 && r2knicksTwo > 100 && r2knicksThree > 100){
    over100Knicks = true;
}
else{
    over100Knicks = false;
}

if(r2netsAvg>r2knicksAvg && over100Nets){
    console.log('Nets win the competition!');
}
else if(r2netsAvg>r2knicksAvg && !over100Nets){
    console.log('Nets have higher score than Knicks, but their minimum score is below 100.')
}
else if(r2netsAvg<r2knicksAvg && over100Knicks){
    console.log('Knicks win the competition!');
}
else if(r2netsAvg<r2knicksAvg && !over100Knicks){
    console.log('Knicks have higher score than Nets, but their minimum score is below 100.')
}
else{
    console.log('There is a draw!');
}

console.log('               For Bonus 2');
const r3netsOne = 97;
const r3netsTwo = 112;
const r3netsThree = 101;
const r3netsAll = r3netsOne+r3netsTwo+r3netsThree;
let over100Nets3;
if(r3netsOne > 100 && r3netsTwo > 100 && r3netsThree > 100){
    over100Nets3 = true;
}
else{
    over100Nets3 = false;
}
const r3knicksOne = 109;
const r3knicksTwo = 95;
const r3knicksThree = 106;
const r3knicksAll = r3knicksOne+r3knicksTwo+r3knicksThree;
let over100Knicks3;
if(r3knicksOne > 100 && r3knicksTwo > 100 && r3knicksThree > 100){
    over100Knicks3 = true;
}
else{
    over100Knicks3 = false;
}

if(r3knicksAll === r3netsAll && over100Knicks3 && over100Nets3){
    console.log('There is a draw!');
}
else{
    console.log('No team win this trophy!');
}

console.log('------------------- Part B ------------------- ');
const bill = [275, 28, 430];
let tip;
for(let i=0; i<3; i++){
    switch(true){
        case bill[i] >= 30 && bill[i] <= 300:
            tip = bill[i] * 0.15;
            console.log(`The bill was ${bill[i]}, the tip was ${tip}, and the total value is ${bill[i]+tip}`);
        break;
        default: 
        tip = bill[i] * 0.2;
            console.log(`The bill was ${bill[i]}, the tip was ${tip}, and the total value is ${bill[i]+tip}`);
    }
}

// const billValue = parseInt(prompt("Enter the bill value"));
// let tipValue; 
// switch(true){
//     case billValue >= 30 && billValue <= 300:
//         tipValue = billValue * 0.15;
//         console.log(`The bill was ${billValue}, the tip was ${tipValue}, and the total value is ${billValue+tipValue}`);
//     break;
//     default: 
//     tipValue = billValue * 0.2;
//         console.log(`The bill was ${billValue}, the tip was ${tipValue}, and the total value is ${billValue+tipValue}`);
// }

console.log('------------------- Part C ------------------- ');

let celsius = parseInt(prompt("Enter a celsius temperature"));
let store;
celsiusToFahrenheit(celsius);
function celsiusToFahrenheit(celsius){
    store = ((celsius*9)/5 + 32).toFixed(1);
    console.log(`${celsius}\u00B0C is ${store}\u00B0F`);
}

let fahrenheit  = parseInt(prompt("Enter a fahrenheit temperature"));
let store2;
fahrenheitToCelsius(fahrenheit );
function fahrenheitToCelsius(fahrenheit){
    store2 = ((fahrenheit -32)*5/9).toFixed(1);
    console.log(`${fahrenheit}\u00B0F is ${store2}\u00B0C`);
}
