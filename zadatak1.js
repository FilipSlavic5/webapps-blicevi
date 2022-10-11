var array = [
    { key: 'k1', value: '2' },
    { key: 'k2', value: '5' },
    { key: 'k3', value: '8' }
];
var mapped = array.map(item => ({ [item.key]: item.value }) );
var obj = Object.assign({}, ...mapped );
console.log(obj);