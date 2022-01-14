import fetch from 'node-fetch';
import parser from 'node-html-parser';

const url = 'https://ischool.uw.edu/';
const response = await fetch(url);
const text = await response.text();
const htmlPage = parser.parse(text);
const imgs = htmlPage.querySelectorAll('img');
const imgData = imgs.map(img => {
    return {
        src: img.attributes.src,
        alt: img.attributes.alt
    };
});
console.log(imgData);