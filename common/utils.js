var sum = require('./math').sum;

exports.calc = function(num) {
    return sum(num, 42);
};
