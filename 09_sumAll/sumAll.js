const sumAll = function (start, end) {
  let initial = 0;
  let final = 0;
  let sum = 0;

  if (
    !Number.isInteger(start) ||
    !Number.isInteger(end) ||
    start < 0 ||
    end < 0
  ) {
    return "ERROR";
  } else {
    if (start > end) {
      initial = end;
      final = start;
    } else {
      initial = start;
      final = end;
    }
  }

  for (let i = initial; i <= final; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
