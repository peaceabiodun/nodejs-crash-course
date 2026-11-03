import url from 'url';

const urlString = 'https://www.google.com/search?q=javascript';

//URL Object
const urlObj = new URL(urlString);
console.log(urlObj);

//format()
console.log(url.format(urlObj));

//import.meta.url
console.log(import.meta.url);

