/* buttons */
const parenthesis = document.getElementById('parenthesis')
parenthesis.addEventListener("click", function() {myFunction("()");});
const zero = document.getElementById('0')
zero.addEventListener("click", function() {myFunction("0");});
const one = document.getElementById('1')
one.addEventListener("click", function() {myFunction("1");});
const two = document.getElementById('2')
two.addEventListener("click", function() {myFunction("2");});
const three = document.getElementById('3')
three.addEventListener("click", function() {myFunction("3");});
const four = document.getElementById('4')
four.addEventListener("click", function() {myFunction("4");});
const five = document.getElementById('5')
five.addEventListener("click", function() {myFunction("5");});
const six = document.getElementById('6')
six.addEventListener("click", function() {myFunction("6");});
const seven = document.getElementById('7')
seven.addEventListener("click", function() {myFunction("7");});
const eight = document.getElementById('8')
eight.addEventListener("click", function() {myFunction("8");});
const nine = document.getElementById('9')
nine.addEventListener("click", function() {myFunction("9");});
const decimal = document.getElementById('decimal')
decimal.addEventListener("click", function() {myFunction(".");});
const plus = document.getElementById('plus')
plus.addEventListener("click", function() {myFunction("+");});
const minus = document.getElementById('minus')
minus.addEventListener("click", function() {myFunction("-");});
const multiply = document.getElementById('multiply')
multiply.addEventListener("click", function() {myFunction("*");});
const divide = document.getElementById('divide')
divide.addEventListener("click", function() {myFunction("/");});
const clear = document.getElementById('clear')
clear.addEventListener("click", function() {myFunction("");});
const equals = document.getElementById('equals')
equals.addEventListener("click", function() {myFunction("=");});
const percentage = document.getElementById('percentage')
percentage.addEventListener("click", function() {myFunction("%");});
const del = document.getElementById('delete')
del.addEventListener("click", function() {myFunction("del");});

var queue = "";
var bracket_count = 0;

function myFunction(input) {
  if (input === "del") {
    if (queue.charAt(queue.length -1) == "("){
      bracket_count --;
    }
    queue = queue.substring(0,queue.length - 1);
    document.getElementById('screen').value = queue;
    document.getElementById('test').value = queue;
    return 1;
  }
  if (input === "=") {
    queue = eval(queue);
    bracket_count = 0;
    document.getElementById('screen').value = queue;
    document.getElementById('test').value = queue;
    return 1;
  }
  if (input === "%"){
    queue = Number(queue) / 10;
    queue = queue.toString();
    document.getElementById('screen').value = queue;
    document.getElementById('test').value = queue;
    return 1;
  }
  if (input === "()") {
    if (queue.length === 0 || queue.charAt(queue.length - 1) == '+' || queue.charAt(queue.length - 1) == '-'|| queue.charAt(queue.length - 1) == '*'|| queue.charAt(queue.length - 1) == '/'){
    queue += "(";
    bracket_count ++;
    }
    else if (bracket_count == 0) {
      bracket_count ++;
      queue += "*("
    }
    else {
      queue += ")"
      bracket_count --;
    }
    document.getElementById('screen').value = queue;
    document.getElementById('test').value = queue;
    return 1;
  }
  queue += input;
  document.getElementById('test').value = queue;
  if (input === ""){
    queue = "";
    bracket_count = 0;
    document.getElementById('screen').value = queue;
    document.getElementById('test').value = queue;
  }
  
  document.getElementById('screen').value += input;

}

function colourChange() {
  document.getElementById
};