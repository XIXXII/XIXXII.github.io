//Data 2 Test
console.log("For Data Two:");
const secondLucasWeights = 95;
const secondLucasHeight = 1.88;

const secondJohnWeights = 85;
const secondJohnHeight = 1.76;

const firstLucasBMIversion = secondLucasWeights/secondLucasHeight**2;
const firstJohnBMIversion = secondJohnWeights/secondJohnHeight**2;
const secondLucasBMIversion = secondLucasWeights/(secondLucasHeight*secondLucasHeight);
const secondJohnBMIversion = secondJohnWeights/(secondJohnHeight*secondJohnHeight);

const lucasHigherBMI = (firstLucasBMIversion > firstJohnBMIversion);
console.log("Lucas has a higher BMI than John.");
console.log(lucasHigherBMI);

console.log(`Lucas and John are friedns, Lucas is ${secondLucasHeight}m tall and John is ${secondJohnHeight}m tall. So John has higher BMI than Lucas, that is  ${firstJohnBMIversion}.`);

console.log(`Second formula shows the BMI of Lucas is ${secondLucasBMIversion} and the BMI of John is ${secondJohnBMIversion}.`)
console.log("----------------------------------------");
// Data 1 Test
console.log("As data1 shows:");
const firstLucasWeights = 78;
const firstLucasHeight = 1.69;

const firstJohnWeights = 92;
const firstJohnHeight = 1.95;

const firstLucasBMIversion1 = firstLucasWeights/firstLucasHeight**2;
const firstJohnBMIversion1 = firstJohnWeights/firstJohnHeight**2;
console.log(`Lucas weights is ${firstLucasWeights}kg and is ${firstLucasHeight}m tall. His BMI is ${firstLucasBMIversion1}`);
console.log(`John weights is ${firstJohnWeights}kg and is ${firstJohnHeight}m tall. His BMI is ${firstJohnBMIversion1}`);
const secondLucasBMIversion1 = firstLucasWeights/(firstLucasHeight*firstLucasHeight);
const secondJohnBMIversion1 = firstJohnWeights/(firstJohnHeight*firstJohnHeight);
console.log("Lucas has a higher BMI than John.");
const lucasHigher = (secondLucasBMIversion1 > secondJohnBMIversion1);
console.log(lucasHigher);

