// Only change code below this line
function comparasionToEqual(a){
    if(a < 5){
        return "Less than 5";
    }
    if(a < 10){
        return "Less than 10";
    }
    if(a > 20){
        return "10 or over";
    }
    if(a >= 10){
        return "More than 20";
    }
}
comparasionToEqual(0);
comparasionToEqual(5);
comparasionToEqual(17);
comparasionToEqual(21);
console.log(comparasionToEqual(0));
console.log(comparasionToEqual(5));
console.log(comparasionToEqual(17));
console.log(comparasionToEqual(21));
// Only change code above this line
module.exports = comparasionToEqual;