const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const symbolsPath = path.join(buildOutputPath, 'symbols');