const isArray = (arr) => Array.isArray(arr);
const executableName = getExecutableName(channel, appName);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));