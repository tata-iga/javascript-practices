const repositoryRootPath = path.resolve(__dirname, '..');
const result = await makeHttpRequest(url);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));