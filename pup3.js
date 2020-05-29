const puppeteer = require('puppeteer');
const express = require('express');
async function run(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:4200${url}`);
    let bodyHTML = await page.content();//page.evaluate(() => document.body.innerHTML);
    browser.close();
    return bodyHTML;
}
const app = express();
app.get('*', (req, res) => {
    console.log(req.url)
    run(req.url).then((html) => {
        res.send(html);
    })

});
app.listen(3000, () => {
    console.log(`Node Express server listening on http://localhost:3000`);
});
// run();