export default class BasePage {
    get iframe() {
        return '#ca-modal-iframe'
    }

    async openProductionWebSite({siteUrl}: { siteUrl: string }): Promise<void> {
        await browser.url(siteUrl);
    }

    async verifyOpenedEndpoint({expectedEndpoint}: { expectedEndpoint: string }): Promise<void> {
        expect(await browser.getUrl()).toContain(expectedEndpoint);
    }

    async switchToCAIframe(): Promise<void> {
        await browser.execute(() => {
            const iframe = document.querySelector('#ca-modal-iframe') as HTMLIFrameElement;
            if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage('Hello from parent', 'https://pm.chargeafter.com');
            }
        });
        const caIframe = await driver.findElement('css selector', this.iframe)
        await browser.switchToFrame(caIframe)
    }
}