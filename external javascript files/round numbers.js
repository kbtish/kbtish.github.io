/* Round numbers External JS
 * Because to.Fixed() method does not round conventionally in certain situations;
 * e.g., JS rounds 1.45 to 1.4 for one decimal place;
 * This code hopefully works around that
*/

// round decimals: ones, tenths, hundredths, thousandths, etc.
// parameters:
// 	number --> the number to be rounded
//	places --> the number of decimal places to round to; 1 = tenths, 2 = hundredths, etc.
function roundDecimalNumber(number, places) {
	number = number*Math.pow(10, places);
	number = number.toFixed(0);
	number = number/Math.pow(10, places);

	return number;
}

// round whole numbers: tens, hundreds, thousands, etc.
// parameters:
//	number --> the number to be rounded
//	value --> place value: 2 = tens, 3 = hundreds, etc.
function roundWholeNumber(number, value) {
    number = number/Math.pow(10, value-1);
	number = number.toFixed(0);
	number = number*Math.pow(10, value-1);
	
	return number;
}