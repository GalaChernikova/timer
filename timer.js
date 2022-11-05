const counterBox = document.querySelector("#counter"); //find counter
let counter = 0; //set 0 by default
let timerId;

// function setTimer() {}
//start
const startBtn = document.querySelector("#start"); //find start button
startBtn.addEventListener("click", function () {
  console.log("startBtn");
  timerId = setInterval(function () {
    counter++; //increase to 1 every 1 sec
    counterBox.innerText = counter; //show counter in box
  }, 1000); //1 sec
});

//pause
const pauseBtn = document.querySelector("#pause");
pauseBtn.addEventListener("click", function () {
  console.log("pauseBtn");
  clearInterval(timerId); //stop counting on click
});

//reset
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", function () {
  console.log("resetBtn");
  counter = 0; //add 0 value to counter
  counterBox.innerText = counter; //add counter value to the box
  clearInterval(timerId); //stop counting on click
});
