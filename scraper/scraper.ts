const fs = require('fs');
const puppeteer = require('puppeteer');

async function scrapeData() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the webpage with the data
  await page.goto('https://www.kan.org.il/lobby/kidnapped/');

  // Extract the data from the DOM
  const data = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('.memorial-list-item'));

    return items.map(item => {
      const name = item.querySelector('.card-title')?.textContent?.trim();
      const ageLocation = item.querySelector('.card-title')?.querySelector('.text-sm')?.textContent?.trim();
      const description = item.querySelector('.card-text')?.textContent?.trim();
      const imageUrl = item.querySelector('.card-img img')?.getAttribute('src');
      const articleUrl = item.querySelector('.card-link')?.getAttribute('href');

      return {
        name,
        ageLocation,
        description,
        imageUrl,
        articleUrl
      };
    });
  });

  // Print the scraped data
  console.log({data});
  fs.writeFileSync('data.json', JSON.stringify(data));
  // Close the browser
  await browser.close();
}

scrapeData();