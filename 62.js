var repeatIt = function (str, n) {
  var output = "";
  if (typeof str !== "string") {
    return "Not a string";
  }
  for (var i = 0; i < n; i++) {
    output += str;
  }

  return output;
};
