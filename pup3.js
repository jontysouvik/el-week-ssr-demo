const puppeteer = require('puppeteer');
const express = require('express');
async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/');
    let bodyHTML = await page.content();//page.evaluate(() => document.body.innerHTML);
    browser.close();
    return bodyHTML;
}
const app = express();
app.get('*', (req, res) => {
    run().then((html) => {
        // console.log(html);
        res.send(html);
    })

});
app.listen(4000, () => {
    console.log(`Node Express server listening on http://localhost:4000`);
});
// run();