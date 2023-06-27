// Write your code below this line.
function luckyNumbers(n) {
    var result = [];
    var numbers = [];
  
    // Populate numbers array with numbers from 1 to 10
    for (var i = 1; i <= 10; i++) {
      numbers.push(i);
    }
  
    // Generate n unique random numbers
    for (var j = 0; j < n; j++) {
      var index = Math.floor(Math.random() * numbers.length);
      var number = numbers.splice(index, 1)[0];
      result.push(number);
    }
  
    return result;
  }
  
  var numbers = luckyNumbers(2);
  console.log(numbers);

  var moreNumbers = luckyNumbers(6);
console.log(moreNumbers);