const merge = Object.assign({}, obj1, obj2);
const isEmptyArray = arr => !arr.length;
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);