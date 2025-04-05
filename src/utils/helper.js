function compareTime(timeStr1, timeStr2) {
  let dataTime1 = new Date(timeStr1);
  let dataTime2 = new Date(timeStr2);

  return dataTime1.getTime() > dataTime2.getTime();
}

module.exports = {
  compareTime
}