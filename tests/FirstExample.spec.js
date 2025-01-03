

const { test, expect}=require('@playwright/test');

test ('Home page', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');  //url

    const titleOfPage=page.title();
    console.log('page title::',titleOfPage);

     await expect(page).toHaveTitle('Swag Labs');  //assertion

     const url=page.url();
     console.log('url::',url);

     await expect(page).toHaveURL('https://www.saucedemo.com/'); //url assertion

    await page.close();  //close the browser

});