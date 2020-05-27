const puppeteer = require('puppeteer');

async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/');
    await page.screenshot({path: `screenshots/screenshot${Date.now().toString()}.png`});
    browser.close();
}
run();