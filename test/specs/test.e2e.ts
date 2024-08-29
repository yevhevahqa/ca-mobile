import AbesStartPage from 'pages/smokeProduction/abesOfMaine/start.page'
import AbesBasketPage from 'pages/smokeProduction/abesOfMaine/basket.page'
import AbesCheckoutPage from 'pages/smokeProduction/abesOfMaine/checkout.page'
import AbesCaWelcomePage from 'pages/smokeProduction/abesOfMaine/caWelcome.page'
import productionUrls from 'fixtures/smokeProduction/productionURLs'
import AbesTestData from 'fixtures/smokeProduction/abesOfMaine/abesOfMaine'
import TestTool from 'pages/smokeProduction/abesOfMaine/testTool.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await AbesStartPage.openProductionWebSite({siteUrl: productionUrls.abesOfMaine});
        await TestTool.fillTestingTool()
        await driver.pause(10000)
        // await AbesStartPage.verifyOpenedWebsite()
        //
        // await AbesStartPage.clickOnAddToCartButton()
        // await AbesBasketPage.verifyBasketPageIsDisplayed({ endpoint: 'Basket' })
        // await AbesBasketPage.proceedToCheckout()
        // await AbesBasketPage.verifyBasketPageIsDisplayed({ endpoint: 'Checkout' })
        // await AbesCheckoutPage.fillShippingAddressForm(AbesTestData.testDataCheckoutSuccess())
        // await AbesCheckoutPage.selectShippingMethod()
        // await AbesCheckoutPage.selectCAPaymentMethod()
        await AbesCaWelcomePage.verifyChargeAfterModal()
    })
})

