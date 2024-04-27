const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const merge = [...new Set(a.concat(b))];
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;