import BasePage from 'pages/base.page';
import {ShippingAddress} from 'interfaces/testDataInterfaces';

class AbesCheckoutPage extends BasePage {
    get firstNameInput() { return $('input[id="ShipFirstName"]')}

    get lastNameInput() {return $('input[id="ShipLastName"]')}

    get countrySelect() { return $('select[id="ShipCountry"]') }

    get shippingAddressInput() { return $('input[id="ShipAddress1"]') }

    get shippingCityInput() { return $('input[id="ShipCity"]') }

    get shippingStateSelect() { return $('select[id="ShipState"]')}

    get shippingZipInput() { return $('input[id="ShipZip"]') }

    get shippingPhoneInput() { return $('input[id="ShipPhone1"]')}

    get shippingEmailInput() { return $('input[id="Email"]') }

    get saveAndContinueButtonShipment() {return $$('button.btn-checkout')[0]}

    /** Delivery options **/
    get shippingMethodsBlock() { return $('div.shipping-methods') }

    get groundShipMethod() { return $('input[name="ShipMethod"]') }

    get saveAndContinueButtonDelivery() { return $$('button.btn-checkout')[1] }

    /** Payment **/
    get chargeAfterPaymentMethodLink() { return 'a.ca-checkout-button' }

    public async fillShippingAddressForm(data: ShippingAddress): Promise<void> {
        await this.firstNameInput.setValue(data.firstName)
        await this.lastNameInput.setValue(data.lastName)
        await this.countrySelect.selectByAttribute('value', data.country)
        await this.shippingAddressInput.setValue(data.address)
        await this.shippingCityInput.setValue(data.city)
        await this.shippingStateSelect.selectByAttribute('value', data.state)
        await this.shippingZipInput.setValue(data.zip)
        await this.shippingPhoneInput.setValue(data.phone)
        await this.shippingEmailInput.setValue(data.email)
        await this.saveAndContinueButtonShipment.click()
    }

    public async selectShippingMethod(): Promise<void> {
        await this.shippingMethodsBlock.waitForDisplayed({timeoutMsg: 'Delivery Options are not displayed'})
        await this.groundShipMethod.click()
        await driver.pause(2000)
        await this.saveAndContinueButtonDelivery.click()
        await this.saveAndContinueButtonDelivery.waitForDisplayed({reverse: true})
    }

    public async selectCAPaymentMethod(): Promise<void> {
        await driver.execute(function(selector: string) {
            const element = document.querySelector(selector);
            (element as HTMLElement).click();
        }, this.chargeAfterPaymentMethodLink);
    }
}

export default new AbesCheckoutPage();
