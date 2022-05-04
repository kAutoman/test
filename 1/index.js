const createDistribution = (array, weights, size) => {
    const distribution = [];
    const sum = weights.reduce((a, b) => a + b);
    const quant = size / sum;
  	for (let i = 0; i < array.length; ++i) {
      	const limit = quant * weights[i];
      	for (let j = 0; j < limit; ++j) {
          	distribution.push(i);
        }
    }
  	return distribution;
};

const randomIndex = (distribution) => {
  	const index = Math.floor(distribution.length * Math.random());  // random index
    return distribution[index];  
};


// Usage example:

const projects = [
	{ id: 1, name: 'Option 1', probability: 0.3 },
	{ id: 2, name: 'Option 2', probability: 0.5 },
	{ id: 3, name: 'Option 3', probability: 0.15 },
	{ id: 4, name: 'Option 4', probability: 0.05 }
];

const weights = [0.3,0.5,0.15,0.05];  // specific items probability (5 + 2 + 3 = 10)

const distribution = createDistribution(projects, weights, 500);  // 10 - describes distribution array size (it affects on precision)

let summary = [
    0,
    0,
    0,
    0
]
for (let i = 0; i < 500; ++i) {
    const index = randomIndex(distribution);
    summary[index] += 1;
    // console.log(projects[index]);  // random value located in the array
}
let result = [
    {'ID 1 = ':summary[0]},
    {'ID 2 = ':summary[1]},
    {'ID 3 = ':summary[2]},
    {'ID 4 = ':summary[3]},
]
console.log(result);