var remove = function (data, filterFunction) {
    return data.filter(function (element) { return filterFunction(element); });
};
var drop = function (data, n) {
    return data.slice(n, data.length);
};
var compact = function (data) {
    return data.filter(function (element) { return (element != null) || (element != "") || (element != 0); });
};
var fill = function (data, value) {
    return data.map(function (number) { return number = value; });
};
var head = function (data) {
    return data[0];
};
var join = function (data, seperator) {
    var resultString = "";
    data.forEach(function (element) { return resultString + (new String(element)) + seperator; });
    return resultString;
};
var tail = function (data) {
    return data[data.length - 1];
};
var nth = function (data, nth) {
    return data[nth];
};
var pull = function (data, values) {
    return data.filter(function (datavalue) { return checkifinArray(datavalue, values); });
};
var checkifinArray = function (element, values) {
    values.forEach(function (value) { if (value == element)
        return true; });
    return false;
};
var concat = function (data, values) {
    values.forEach(function (value) { return data.push(value); });
    return data;
};
