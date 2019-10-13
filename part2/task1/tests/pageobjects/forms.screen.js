const SELECTORS = {
    INPUT: 'android.widget.EditText',
    INPUT_TEXT: '*//android.widget.TextView[6]',
    SETTINGS: '*//android.widget.TextView[@content-desc="Settings"]',
    INPUT_TEXT: '*//android.widget.TextView[6]',
    BUTTON: 'android.widget.Button',
    HOME: 'android.widget.ImageView'
};

class FormsScreen  {
    homeToBeDisaplyed () {
        $(SELECTORS.HOME).isDisplayed();
    }

    get input () {
        return $(SELECTORS.INPUT);
    }

    get inputTextResult () {
        return $(SELECTORS.INPUT_TEXT);
    }

    getInputTextResult() {
        return this.inputTextResult.getText();
    }

    goToSettings () {
        $(SELECTORS.SETTINGS).click();
    }

    button () {
        $(SELECTORS.BUTTON).click();
    }

}

export default new FormsScreen();
