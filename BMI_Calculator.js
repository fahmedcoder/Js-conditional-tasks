var weight = 30;
var height = 179 / 100;

var BMI = weight / height ** 2;

console.log(BMI);
if (BMI < 18.5) {
  console.log("You're underweight.");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("you are normal.");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("you are overweight.");
} else {
  console.log(" Otherwise, you are obese.");
}
