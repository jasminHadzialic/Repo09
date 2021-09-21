// Only change code below this line
function logical10Operator(num){
    if(num < 20 || num > 30){
        return "Out";
    }
    return "In";
}

logical10Operator(0);
logical10Operator(9);
logical10Operator(20);
logical10Operator(23);
logical10Operator(30);
logical10Operator(31);
logical10Operator(105);
console.log(logical10Operator(0));
console.log(logical10Operator(9));
console.log(logical10Operator(20));
console.log(logical10Operator(23));
console.log(logical10Operator(30));
console.log(logical10Operator(31));
console.log(logical10Operator(105));
// Only change code above this line
module.exports = logical10Operator;
