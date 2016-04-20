/*
 * allow the user to practice with particular digits;
 * these functions are called on button clicks to either select all digits 1-9 or clear all digits
 */

function selectAllDigits() {
    document.forms[0].digitZero.checked = true;
    document.forms[0].digitOne.checked = true;
    document.forms[0].digitTwo.checked = true;
    document.forms[0].digitThree.checked = true;
    document.forms[0].digitFour.checked = true;
    document.forms[0].digitFive.checked = true;
    document.forms[0].digitSix.checked = true;
    document.forms[0].digitSeven.checked = true;
    document.forms[0].digitEight.checked = true;
    document.forms[0].digitNine.checked = true;
}

function clearAllDigits() {
    document.forms[0].digitZero.checked = false;
    document.forms[0].digitOne.checked = false;
    document.forms[0].digitTwo.checked = false;
    document.forms[0].digitThree.checked = false;
    document.forms[0].digitFour.checked = false;
    document.forms[0].digitFive.checked = false;
    document.forms[0].digitSix.checked = false;
    document.forms[0].digitSeven.checked = false;
    document.forms[0].digitEight.checked = false;
    document.forms[0].digitNine.checked = false;
}

function selectAllOperations() {
    document.forms[0].addition.checked = true;
    document.forms[0].subtraction.checked = true;
    document.forms[0].multiplication.checked = true;
    document.forms[0].division.checked = true;
}

function clearAllOperations() {
    document.forms[0].addition.checked = false;
    document.forms[0].subtraction.checked = false;
    document.forms[0].multiplication.checked = false;
    document.forms[0].division.checked = false;
}