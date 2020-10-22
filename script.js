let expirationDate = [];

//Get current date
var Today = new Date();
const nowDay = Today.getDate();
let nowMonth = Today.getMonth() + 1;
const nowYear = Today.getFullYear();
const nowFormat = [nowDay, nowMonth, nowYear];

// get expiration date
function dewit() {
  const month = document.getElementById("month");
  const day = document.getElementById("day");
  const year = document.getElementById("year");

  const userDay = day.value;
  const userMonth = month.value;
  const userYear = year.value;
  expirationDate = [userDay, userMonth, userYear];
  document.querySelector("h2").innerHTML = calcTime(expirationDate, nowFormat);
}

function calcTime(expire, now) {
  const DaysTill = expire[0] - now[0];
  const MonthsTill = expire[1] - now[1];
  const YearsTill = expire[2] - now[2];
  const TotalDays = DaysTill + MonthsTill * 31 + YearsTill * 365;

  if (TotalDays <= 1) {
    return "Expired";
  } else if (TotalDays >= 365) {
    return `You have ${Math.round(TotalDays / 365)} year(s) left.`;
  } else if (TotalDays >= 30) {
    return `You have about ${Math.round(TotalDays / 31)} month(s) left.`;
  } else if (TotalDays >= 7) {
    return `You have about ${Math.round(TotalDays / 7)} week(s) left.`;
  } else if (TotalDays < 7) {
    return "days " + TotalDays;
  }
}
