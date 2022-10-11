const arr = [9, 5, '2', 'ab', '3', -1];

const nums = arr.filter(n => typeof n == "number").sort((a, b) => a - b); 
const non_nums = arr.filter(x => typeof x != "number").sort(); 

const res = [...nums, ...non_nums]; 
console.log(res); 