import FormScreen from '../pageobjects/forms.screen';

describe('Fresh TIP', () => {
    beforeEach(() => {
        FormScreen.homeToBeDisaplyed(true);
    });

    it('User should be able to change the Tip Percentage', () => {
        FormScreen.goToSettings()

        FormScreen.input.setValue('15');
        FormScreen.button();

        FormScreen.input.setValue('15');
        FormScreen.button();

        const tes = FormScreen.getInputTextResult()
        expect(tes).toEqual('$17.25');
    });

    it('User should be able to calculate the Tip', () => {
        FormScreen.input.setValue('10');
        FormScreen.button();

        const tes = FormScreen.getInputTextResult()
        expect(tes).toEqual('$11.50');
    });
});
