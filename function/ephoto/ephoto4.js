const puppeter = require('puppeteer');
const cheerio = require('cheerio');
const fs = require("fs");
let settings = JSON.parse(fs.readFileSync('./database/setting/settings.json'))

async function ephoto4(url, text1, text2, id) {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeter.launch({
        headless: true,
        executablePath: settings.chrome,
        defaultViewport: null
      });
      const page = await browser.newPage();
      await page.goto(url);
      await page.type('#text-0', text1);
      await page.type('#text-1', text2);
      await page.click('#' + id);
      await page.click('#submit');
      await page.waitForTimeout(9550)
      const bodyHandler = await page.$('body');
      const html = await page.evaluate(body => body.innerHTML, bodyHandler);
      await bodyHandler.dispose();
      await browser.close();
      let hasil = []
      const $ = cheerio.load(html)
      let nih = $('img.bg-image').attr('src')
      resolve(nih)
    } catch (error) {
      reject({ status: false, message: error })
    }

  })
}

module.exports.ephoto4 = ephoto4