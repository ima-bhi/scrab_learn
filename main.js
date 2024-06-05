import { gotScraping } from 'got-scraping';
import * as cheerio from 'cheerio';

// const storeUrl = 'https://www.idealo.de/preisvergleich/ProductCategory/12073F884392.html';

// const response = await gotScraping(storeUrl);
// const html = response.body;
// // Parse HTML with Cheerio
// const $ = cheerio.load(html);

// // Find all products on the page
// const products = $('div.sr-resultList_NAJkZ');
// const results = [];
// // Loop through all the products
// // and print their text to terminal
// for (const product of products) {
//     const titleElements = $(product).find('div.sr-productSummary__title_f5flP');
//     const titles = titleElements.map((index, element) => $(element).text().trim()).get();
//     // Select the price element
//     const priceElement = $(product).find('div.sr-detailedPriceInfo__price_sYVmx');

//     // Remove the span element to get the remaining text
//     priceElement.find('span').remove();
//     // Extract the text content
    // const price = priceElement.map((index, element) => $(element).text().trim()).get();

    //   // Combine title and summary for each product
    //   for (let i = 0; i < Math.max(titles.length, price.length); i++) {
    //     results.push({
    //         title: titles[i] || '', // Use empty string if title is undefined
    //         price: price[i] || '' // Use empty string if summary is undefined
    //     });
    // }
// }
// console.log(results);


const storeUrl = 'https://www.obi.de/search/scheibenwischer/';

const response = await gotScraping(storeUrl);
const html = response.body;
// Parse HTML with Cheerio
const $ = cheerio.load(html);
const results = [];
// Find all products on the page
const products = $('#ergebnisliste');
for (const product of products) {
    const titleElements = $(product).find('div.find-z-1');
    const titles = titleElements.map((index, element) => $(element).text().trim()).get();

    //find-h-preis
    const priceElements=$(product).find('div.find-h-preis');
    const price = priceElements.map((index, element) => $(element).text().trim()).get();
         // Combine title and summary for each product
         for (let i = 0; i < Math.max(titles.length, price.length); i++) {
            results.push({
                title: titles[i] || '', // Use empty string if title is undefined
                price: price[i] || '' // Use empty string if summary is undefined
            });
        }
}
console.log("r",results)