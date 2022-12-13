// function for display
function displaySomewhere(elementId, string) {
  try {
    const element = document.querySelector('#' + elementId);
    element.innerHTML += string + '<br>';
  } catch(e) {
    console.error('displaySomewhere: ', e);
  }
}

// Strings
// exercise 1
/**
 * function addFullStop
 * @param {string} can be with or without a full stop
 * @returns {string} result, with one full stop only.
 */
function addFullStop(inputStr) {
  // does the string already have a full stop at the end?
  if (inputStr.endsWith('.')) {
    return inputStr;
  } 
  // Put a full stop on the end.
  return inputStr + '.';
}

const testFullStop1 = addFullStop('hello...');
displaySomewhere('ex-1-para', testFullStop1);
const testFullStop2 = addFullStop('59438uryw');
displaySomewhere('ex-1-para', testFullStop2);
const testFullStop3 = addFullStop('Java..Script');
displaySomewhere('ex-1-para', testFullStop3);