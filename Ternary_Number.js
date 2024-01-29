var num1 = 99,
  num2 = 89,
  result;

if (num1 > num2) {
  result = num1 * 2;
  console.log(result);
} else {
  result = num1 + num2;
  console.log(result);
}

result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result);
