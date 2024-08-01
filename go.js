var regexp  = new RegExp('{{([^}]+)}}', 'g');
const getRandomBoolean = () => Math.random() >= 0.5;
const result = await makeHttpRequest(url);