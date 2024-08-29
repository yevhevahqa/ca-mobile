import BasePage from 'pages/base.page';
import modalText from 'fixtures/smokeProduction/modalText'


class AbesCaWelcomePage extends BasePage {
    get merchantLogo() { return $('img[alt="Abe\'s of Maine Logo"]')}
    get worryFreeTextText() { return $$('p[data-test-id="typography"]')[0]}
    get buyNowPayAfterText() { return $('h1[data-test-id="typography"]')}
    get subtitle() { return $$('p[data-test-id="typography"]')[2]}
    get mobilePhoneInput() { return $('input[name="mobile"]')}
    get nextButton() { return $('[data-test-id="next"]')}
    get directTitle() { return $('[data-test-id="direct-title"]')}
    get directSubtitle() { return $('[data-test-id="direct-sub-title"]')}
    get lenderLogo() { return $('[data-test-id="lender-logo"]')}

    get fakeLogo() { return $('img[alt="ally-logo"]')}

    public async verifyChargeAfterModal(): Promise<void> {
        await this.switchToCAIframe()
        await this.fakeLogo.waitForDisplayed()


        // await expect(await this.worryFreeTextText.getText()).toEqual(modalText.worryFreeText)
        // await expect(await this.buyNowPayAfterText.getText()).toEqual(modalText.title)
        // await expect(await this.subtitle.getText()).toContain(modalText.subtitle)
        // await expect(await this.directTitle.getText()).toEqual(modalText.directTitle)
        // await expect(await this.directSubtitle.getText()).toEqual(modalText.directSubtitle)
    }
}

export default new AbesCaWelcomePage();
