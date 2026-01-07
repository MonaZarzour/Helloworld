let Array = process.argv;

let sum = 0;

for (let i = 2; i < Array.length; i++)
{

sum += Number(Array[i]);

};

console.log(sum);
