const puppeteer = require('puppeteer');
const fs = require('fs');
async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/red');
    const content = await page.content();
    fs.appendFile(`viewes/view${Date.now().toString()}.html`, content, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    browser.close();
}
run();