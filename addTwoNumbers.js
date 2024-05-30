var regexp  = new RegExp('{{([^}]+)}}', 'g');
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);