function getAge(year, month, day) {
  var today = new Date();
  var birthday = new Date(year, month - 1, day);
  var y = today.getFullYear() - birthday.getFullYear();
  var m = today.getMonth() - birthday.getMonth();
  var d = today.getDate() - birthday.getDate();
  if (m < 0 || (m === 0 && d < 0)) {
    y--;
  }
  return y;
}

function getDateString(date) {
  return ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + "-" + date.getFullYear();
}

function getDayDiffString(date) {
  var today = new Date();
  var diff = today - date;
  if (diff <= 0) {
    diff = 0;
  }
  diff = Math.floor(diff / 1000 / 60 / 60);
  if (diff < 24) {
    return diff + " hour" + (diff <= 1 ? "" : "s")
  }
  diff = Math.floor(diff / 24);
  if (diff < 7) {
    return diff + " day" + (diff <= 1 ? "" : "s")
  }
  if (diff < 30) {
    diff = Math.floor(diff / 7);
    return diff + " week" + (diff <= 1 ? "" : "s")
  }
  if (diff < 365) {
    diff = Math.floor(diff / 30);
    return diff + " month" + (diff <= 1 ? "" : "s")
  }
  diff = Math.floor(diff / 365);
  return diff + " year" + (diff <= 1 ? "" : "s")
}

function getLastUpdatedString(year, month, day, hour) {
  var date = new Date(year, month - 1, day, hour, 0, 0);
  return "Last updated at " + getDateString(date) + " (" + getDayDiffString(date) + " ago).";
}

function setTooltip(target) {
  $(target).prop("title", function () {
    return $(this).text().replaceAll("\t", "").replaceAll("\n", " ");
  });
}
