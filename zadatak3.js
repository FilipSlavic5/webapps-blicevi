const arr = [9, 5, '2', 'ab', '3', -1];

const nums = arr.filter(n => typeof n == "number").sort((a, b) => a - b); 
const non_nums = arr.filter(x => typeof x != "number").sort(); 

const res = [...nums, ...non_nums]; // combine the two arrays
console.log(res); // [-1, 5, 9, "2", "3", "gas"]