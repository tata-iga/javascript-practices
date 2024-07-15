console.log(false === '0');
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());