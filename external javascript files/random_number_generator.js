/*
 *  Random number generator function
 *   Returns a random number in a specified range
*/



// generate a random number
function getNumber(min, max) {
    var x = Math.floor(Math.random()*(max - min + 1)) + min;
    
    return x;
}

