

const { test, expect}=require('@playwright/test');

test ('Home page', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');

    const pageTitle =page.title();
    console.log('page title::',pageTitle);

     await expect(page).toHaveTitle('Swag Labs');

     const url=page.url();
     console.log('url::',url);

     await expect(page).toHaveURL('https://www.saucedemo.com/');

    await page.close();

});