const formatDate = timeInSeconds => {
  var hour = Math.floor(timeInSeconds / 3600);
  var min = Math.floor((timeInSeconds % 3600) / 60);
  var sec = Math.floor(timeInSeconds % 60);

  if (timeInSeconds <= 60) {
    return sec + "s";
  } else if (timeInSeconds === undefined) {
    return `0s`;
  } else if (timeInSeconds > 60 && timeInSeconds < 3600) {
    if (sec === 0) {
      return min + "m";
    }
    return min + "m " + sec + "s";
  } else if (timeInSeconds >= 3600) {
    if (min === 0 && sec === 0) {
      return hour + "h";
    } else if (sec === 0) {
      return hour + "h " + min + "m";
    } else if (min === 0) {
      return hour + "h " + sec + "s";
    }
    return hour + "h " + min + "m " + sec + "s";
  }
};

module.exports = formatDate;
