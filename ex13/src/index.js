// Only change codde below this line
function inverseWhile() {
    var fiveNumbers = "";
      var i = 5;  
    while (i > -1) {
    fiveNumbers += i;  
      if(i > 0) {
        fiveNumbers += ",";
      } 
        i--;  

}
    return fiveNumbers; 
}

inverseWhile();
// Only change code above this line
console.log(inverseWhile());
module.exports = inverseWhile;