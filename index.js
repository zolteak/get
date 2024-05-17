const get = require('./get');

const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined];

console.log(get.get(cities, 1)); // 'london'
console.log(get.get(cities, 4)); // ''
console.log(get.get(cities, 10, 'paris')); // 'paris'
console.log(get.get(cities, -1, 'oops')); // 'oops'
console.log(get.get(cities, 5, 'oops')); // null
console.log(get.get(cities, 6, 'oops')); // undefined
console.log(get.get(cities, 7)); // null