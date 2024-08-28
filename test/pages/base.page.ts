export default class BasePage {
    get iframe() { return '#ca-modal-iframe' }
    async openProductionWebSite({siteUrl}: {siteUrl: string}): Promise<void> {
        await browser.url(siteUrl);
    }

    async verifyOpenedEndpoint({expectedEndpoint}: {expectedEndpoint: string}): Promise<void> {
        expect(await browser.getUrl()).toContain(expectedEndpoint);
    }

    async switchToCAIframe(): Promise<void> {
        const caIframe = await driver.findElement('css selector', this.iframe)
        await browser.switchToFrame(caIframe)
    }
}