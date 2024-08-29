import BasePage from 'pages/base.page';

class  TestTool extends BasePage {
    get itemName() { return $('input[name="itemname1"]') }
    get sku() { return $('input[name="itemsku1"]') }
    get price() { return $('input[name="itemprice1"]') }
    get quantity() { return $('input[name="itemquantity1"]') }
    get productCategory() { return $('input[name="itemcategory1"]') }
    get discount() { return $('input[name="discount"]') }
    get tax() { return $('input[name="taxAmount"]') }
    get shipping() { return $('input[name="shippingAmount"]') }
    get publicKey() { return $('input[id="apiKey"]') }
    get firstName() { return $('input[name="firstName"]') }
    get lastName() { return $('input[name="lastName"]') }
    get email() { return $('input[name="email"]') }
    get phone() { return $('input[name="mobilePhoneNumber"]') }
    get address() { return $('input[name="billingAddress1"]') }
    get state() { return $('input[name="billingstate"]') }
    get city() { return $('input[name="billingcity"]') }
    get zip() { return $('input[name="billingzipCode"]') }
    get v3() { return $('input[name="modalVersion"][value="v3"]') }
    get launch() { return $('button[id="launch-checkout-script"]') }
    get launchCA() { return $('img[class^="ca-promotional"]') }
    get deleteSecondItem() { return $('h6[id="itemTitle2"] button') }


    public async fillTestingTool(): Promise<void> {
       await this.itemName.waitForDisplayed()
       await this.deleteSecondItem.click()
       await this.itemName.setValue('Awesome Product')
       await this.sku.setValue('STF1283')
       await this.price.setValue('500')
       await this.quantity.setValue('1')
       await this.productCategory.setValue('Sofas')
       await this.discount.setValue('10')
       await this.tax.setValue('0')
       await this.shipping.setValue('0')
       await this.v3.click()
       await this.publicKey.setValue('729d423ebcfdc239ed1ed3a3c48cbe5c180096a2')
       await this.firstName.setValue('Mimic')
       await this.lastName.setValue('Approve')
       await this.email.setValue('fsdfsdfsdfsdf@ggmail.com')
       await this.phone.setValue('1234562798')
       await this.address.setValue('57 Hastings St')
       await this.state.setValue('MA')
       await this.city.setValue('Springfield')
       await this.zip.setValue('01104')
       await this.launch.click()
       await this.launchCA.click()
    }
}

export default new TestTool();
