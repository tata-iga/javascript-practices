const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const shuffledArray = array.sort(() => Math.random() - 0.5); 