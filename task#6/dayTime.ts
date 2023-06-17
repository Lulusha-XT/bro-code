let today = new Date();
let day = today.getDay();

let dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("today is : " + dayList[day] + ".");
let hour = today.getHours();
let prepand = hour >= 12 ? "PM" : "AM";

hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && prepand === "PM") {
  hour = 12;
  prepand = "Midnight";
} else console.log("Current Time : " + hour + prepand);
