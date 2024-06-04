const fs = require('fs');
const path = require('path');

const apiKey = process.env.WEATHER_API_KEY;
const htmlPath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Replace placeholder with actual API key
htmlContent = htmlContent.replace('7594c07d042b49c586631024240306', apiKey);

fs.writeFileSync(htmlPath, htmlContent);
