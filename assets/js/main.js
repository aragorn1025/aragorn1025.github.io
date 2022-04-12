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

function setTooltip(target) {
  $(target).prop("title", function () {
    return $(this).text().replaceAll("\t", "").replaceAll("\n", " ");
  });
}
