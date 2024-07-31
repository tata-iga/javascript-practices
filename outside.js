const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());