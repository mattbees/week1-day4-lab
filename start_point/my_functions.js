myFunctions = {

  helloWorld() {
    return("Hello World!");
  },

  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  multiply(num1, num2) {
    return num1 * num2;
  },

  divide(num1, num2) {
    return num1 / num2;
  },

  lengthOfString(string) {
    return string.length;
  },

  concatenateStrings(str1, str2) {
    return str1 + str2;
  },

  addStringAsNumber(numStr1, numStr2) {
    return parseInt(numStr1) + parseInt(numStr2);
  },

  numberToFullMonthName(monthNum) {
    const months = [ 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December' ];
    return months[monthNum-1];
  },

  numberToShortMonthName(monthNum) {
    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
    return months[monthNum-1];
  },

  cube(root) {
    return (Math.pow(root, 3)); // research cube notation (powers)
  },

  sphereVol(rad) {
    let answer = (4/3) * Math.PI * myFunctions.cube(rad);
    return parseFloat(answer.toFixed(2));
  }

};

module.exports = myFunctions;
