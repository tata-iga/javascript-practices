console.log("1 && 2 = "+(1 && 2));
const uniqueArr = (arr) => [...new Set(arr)];
const resultingPromises = urls.map((url) => makHttpRequest(url));