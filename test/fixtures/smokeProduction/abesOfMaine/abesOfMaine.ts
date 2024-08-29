import FixturesBasePage from 'fixtures/fixturesBasePage';

class AbesTestData extends FixturesBasePage {
    public testDataCheckoutSuccess() {
        return {
            firstName: 'Alan',
            lastName: 'Walker',
            country: 'US',
            address: '8061 TONAWANDA CREEK RD',
            city: 'EAST AMHERST',
            state: 'NY',
            zip: '14051',
            phone: this.getValidUSPhoneNumber(),
            email: this.getRandomEmail(),
        };
    }
}
export default new AbesTestData();
