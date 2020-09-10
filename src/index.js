
exports.min = function min (array) {
  return array === undefined || array.length === 0 ? 0 : array.sort( (a, b) => a -b)[0]
}

exports.max = function max (array) {
  return array === undefined  || array.length === 0 ? 0 : array.sort( (a, b) => a -b)[array.length - 1]
}

exports.avg = function avg (array) {
  return array === undefined || array.length === 0 ? 0 : array.reduce((cur, sum) => cur + sum) / array.length 
}
