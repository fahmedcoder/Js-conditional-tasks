/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var age = 9;
var ticketPrice = 800;
var student = true;
if (age < 10) {
  console.log("Ticket is free");
} else if (age <= 30 && student == true) {
  var studentTicketPrice = ticketPrice * 0.5;
  console.log("Students pay", studentTicketPrice);
} else if (age >= 60) {
  var seniorCitizenPrice = ticketPrice * 0.85;
  console.log("Senior citizens pay", seniorCitizenPrice);
} else {
  console.log("Regular ticket fare", ticketPrice, "tk");
}
