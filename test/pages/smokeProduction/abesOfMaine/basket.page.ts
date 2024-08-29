import BasePage from 'pages/base.page';

class AbesBasketPage extends BasePage {
    get headerLogo() { return $('[alt="Abes of Maine"]') }

    get footer() { return $('div.all-rights');}

    get proceedToCheckoutButton() { return $('button.btn-success') }

    async verifyBasketPageIsDisplayed({endpoint}: {endpoint: string}): Promise<void> {
        await this.verifyOpenedEndpoint({expectedEndpoint: endpoint})
        await Promise.all([
            this.headerLogo.waitForDisplayed({timeoutMsg: 'Header logo is not displayed'}),
            this.footer.waitForDisplayed({timeoutMsg: 'Footer is not displayed'})
        ]);
    }

    async proceedToCheckout(): Promise<void> {
        await this.proceedToCheckoutButton.click()
        await this.proceedToCheckoutButton.waitForDisplayed({
            reverse: true,
            timeoutMsg: 'Proceed To Checkout button still is on page'
        })
    }
}

export default new AbesBasketPage();
