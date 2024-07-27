const shuffledArray = array.sort(() => Math.random() - 0.5); 
const timeFromDate = date => date.toTimeString().slice(0, 8);
const toggleBool = () => (bool = !bool);