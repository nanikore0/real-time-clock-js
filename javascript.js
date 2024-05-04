////////////////////////////////////////
// Javascript project real time clock //
////////////////////////////////////////

var txtTime = document.querySelector(".time");
var txtDay = document.querySelector(".day");

// executed when page loads
updateClock();

// update every second
setInterval(updateClock, 1000);

function updateClock() {
  // get current time
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var weekDay = now.getDay();
  var day = now.getDate();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // text formatting
  var weekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (day < 10) {
    day = `0${day}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // updating date and time
  txtTime.innerHTML = `${hours}:${minutes}:${seconds}`;
  txtDay.innerHTML = `Today is ${weekNames[weekDay]}, ${monthNames[month]} ${day}, ${year}`;
}
