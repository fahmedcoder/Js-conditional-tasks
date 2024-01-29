var myScore = 85;
var friendScore = 70;

if (myScore > 80) {
  if (friendScore > 80) {
    console.log("Go for a lunch");
  } else if (friendScore < 60 && friendScore >= 40) {
    console.log("message unseen");
  } else if (friendScore < 80 && friendScore >= 40) {
    console.log("Good luck next time");
  } else {
    console.log("Block your friend");
  }
} else {
  console.log(" go to home and sleep and act sad");
}
