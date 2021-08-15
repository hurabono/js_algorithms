// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
      //alternative solution

      return str.split('').reduce( (rev, char) => char + rev, '');

}

module.exports = reverse;


/*function reverseInt(n) {
  var reverseInt = 0;
  while (n != 0) {
    reverseInt = (reverseInt * 10) + (n % 10);
    n = parseInt(n / 10); //without parseInt, JS will result this division as float.
  }
  return reverseInt;
} */


/*
     let reversed = '';

      for (let character of str){
            reversed = character + reversed;
      }

      return reversed;
*/

/*
      const arr = str.split('');
      arr.reverse();
      return arr.join('');
      
      return str.split('').reverse().join('');
*/