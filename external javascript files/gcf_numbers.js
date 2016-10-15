/*  generate numbers for GCF;
 *  should probably not be used for LCM;
 *
 *  possible numbers will be in the range of 1 to 50, with 7 exclusions
 *
 *  exclusions: prime numbers above 23
*/

function getGCFNumber() {
    var number; // the value that will be returned
    var a, b, c, d; // factors to build the number
    
    var A = [1, 2, 3, 5, 7, 11];
    var B = [13, 17, 19, 23];
    var C = [32, 48];
    
    // we will set the following probabilities for each set
    // A: 65%
    // B: 30%
    // C: 5%
    var i = getNumber(0, 99); // external js
    
    if (i<64) { // we will select up to four times from the six elements of A
        var j = getNumber(0,5); // external js
        var k = getNumber(0,5);
        a = A[j];
        b = A[k];

        while (a*b > 50) {
            j = getNumber(0,5); // external js
            k = getNumber(0,5);
            a = A[j];
            b = A[k];
        } // make sure we don't get a number over 50
        
        if (a*b > 25) {
            number = a*b;
        }
        else {
            j = getNumber(0,5);
            c = A[j];
            
            while (a*b*c > 50) {
                j = getNumber(0,5);
                c = A[j];
            }
            
            if (a*b*c > 25) {
                number = a*b*c;
            }
            else {
                j = getNumber(0,5);
                d = A[j];
                
                while (a*b*c*d > 50) {
                    j = getNumber(0,5);
                    d = A[j];
                }
                
                number = a*b*c*d;
            }
        }
        
    }
    else if (i < 94) { // we will select once from the four elements of B
        var j = getNumber(0,3); // external js
        
        var k = getNumber(1,2);
        number = B[j]*k;
    }
    else { // select once from the two elements of C
        var j = getNumber(0,1);
        
        number = C[j];
    }
    
    return number;
}