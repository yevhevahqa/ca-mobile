import BasePage from 'pages/base.page';

class  AbesStartPage extends BasePage {
    get header() { return $('header div.main-menu') }

    get footer() { return $('div.all-rights') }

    get addToCartButton() { return $('button.add-to-cart') }

    public async verifyOpenedWebsite(): Promise<void> {
        await Promise.all([
            this.header.waitForDisplayed({timeoutMsg: 'Abes logo in top of menu is not displayed'}),
            this.footer.waitForDisplayed({timeoutMsg: 'Abes footer is not displayed'})
        ]);
    }

    public async clickOnAddToCartButton(): Promise<void> {
        await this.addToCartButton.click()
        await this.addToCartButton.waitForDisplayed({
            reverse: true,
            timeoutMsg: 'Add to cart button did not disappear'
        });
    }
}

export default new AbesStartPage();
