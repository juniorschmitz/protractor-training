import { browser, element, by } from 'protractor';

export class SigninPage {
  loadHome() {
    return browser.get('');
  };

  verifyUyl() {
    return browser.getCurrentUrl();
  };

  setInputUserName(login) {
    element(by.css('input[formControlName="userName"]')).sendKeys(login);
  }

  setInputPassword(password) {
    element(by.css('input[formControlName="password"]')).sendKeys(password);
  }

  getInputUserName() {
    return element(by.css('input[formControlName="userName"]'));
  }

  getInputPassword() {
    return element(by.css('input[formControlName="password"]'));
  }

  getLoginButton() {
    return element(by.buttonText('login'));
  }

  loginUser(login, password) {
    this.setInputUserName(login);
    this.setInputPassword(password);
    this.getLoginButton().click();
  }
}