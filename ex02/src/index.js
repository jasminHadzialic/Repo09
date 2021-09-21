// Only change code below this line
function myFunction(myParametar){
    if(myParametar){
        return "The parametar is true!";
    }
    return "The parametar is false!";
}
myFunction(true)
myFunction(false);
console.log(myFunction(true));
console.log(myFunction(false));
// Only change code above this line
module.exports = myFunction();