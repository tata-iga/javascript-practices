const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const timeFromDate = date => date.toTimeString().slice(0, 8);