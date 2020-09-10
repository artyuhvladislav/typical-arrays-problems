
exports.min = function min (array) {
  return array.length !== 0 ? array.sort( (a, b) => a -b)[0] : 0
}

exports.max = function max (array) {
  return array.length !== 0 ? array.sort( (a, b) => a -b)[array.length - 1] : 0
}

exports.avg = function avg (array) {
  return array.length !== 0 ? array.reduce((cur, sum) => cur + sum) / array.length : 0
}
