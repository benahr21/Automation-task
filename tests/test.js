const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe('Automation Exercise', ()=>{
    // Define varibles
    let browser;
    let page;

    //Initialize browser and page before the test-steps 
    before (async function(){
        browser = await puppeteer.launch({headless:false, slowMo:150});
        page = await browser.newPage();
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000); 
    })

    //Close the browser only after the tests
    after(async function(){
        await browser.close();
    })

    //Few it statements to test each one of questions

    it('Should launch The Browser', async function() {
        await page.goto('http://contractorsinsurancereview.com/ExampleForm/');
    })

    it('Should type the Name', async function(){
        await page.type('#name', 'Benjamin');
    })

    it('Should type the Email', async function(){
        await page.type('#email', 'Benjamin@mail.com');
    })

    it('Should type the Phone', async function(){
        await page.type('#phone', '05043519122');
    })

    it('Should type the Company Fields', async function(){
        await page.type('#company', 'Software');
    })

    //Save the image in the root folder
    it('Should take a screen shot', async function(){
        await page.screenshot({
            path:'./screenshot.png',
            fullPage: true
        })
    })

    it('Should Change the Number of Employees from 1-10 to 51-500', async function(){
        await page.select('#employees','51-500');
    })

    it('Click the request_a_callback Button', async function(){
        await page.click('.button');
        await page.waitForTimeout(5000);
    })

    it('Write to console.log when reaching the thank you page', async function(){

        
        await page.waitForFunction(
            'document.querySelector("body").innerText.includes("Thank")',
          );
        console.log('Reached to the thank you page');

        /* Another option but i think the first one is safer
        // const url = await page.url();
        // const h1_text = await page.$eval('h1', element => element.textContent)
        // expect(h1_text).to.be.a('string', 'Thank You!');
        */
    })
  
})