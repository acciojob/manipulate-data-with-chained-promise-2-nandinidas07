//your JS code here. If required.
const inputArray = [1, 2, 3, 4];
const output = document.createElement("div");
document.body.appendChild(output);


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const filterOdds = (arr) => arr.filter(num => num % 2 === 0);

const multiplyBy2 = (arr) => arr.map(num => num * 2);

delay(2000)
  .then(() => {
    const step1 = filterOdds(inputArray);
    output.innerText = step1.join(", ");
    return delay(2000).then(() => step1);
  })
  .then((step1) => {
    const step2 = multiplyBy2(step1);
    output.innerText = step2.join(", ");
  });