import moment from "moment";

function formatDate(date){
  return moment(date).format("dddd Do MMMM YYYY");
}

function yearsSinceDate(date){
  return moment().diff(moment([date]), "years");
}

function getDayFromDate(date){
  return moment(date).format("dddd");
}

function daysSinceDate(date){
  return moment().diff(moment([date]), "days") - 3;
}

export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };
