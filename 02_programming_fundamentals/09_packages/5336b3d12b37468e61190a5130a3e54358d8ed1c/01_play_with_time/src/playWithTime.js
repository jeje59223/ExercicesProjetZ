import moment from "moment";

function formatDate(date){
  return moment(date).format("dddd Do MMMM YYYY");
}

function yearsSinceDate(date){
  // let a = moment([]);
  let b = moment([date]).format();
  return moment().diff(b, "years");
}

function getDayFromDate(date){
  return moment(date).format("dddd");
  // let a = moment([]);
  
}

function daysSinceDate(date){
  let b = moment([date]).format();
  return moment().diff(b, "days") - 3;
}
// console.log(moment([]));
// console.log(yearsSinceDate("2000-05-31"));
// console.log(getDayFromDate("2000-05-31"));
// console.log(daysSinceDate("2000-05-31"));
// console.log("depuis : " + yearsSinceDate(2000));

export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };
