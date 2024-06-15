const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isEmptyArray = arr => !arr.length;