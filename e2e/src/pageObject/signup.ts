import { browser, element, by } from 'protractor';

export class SignUpPage {
  loadHome() {
    return browser.get('');
  };

  loadSignUp() {
    return browser.get('/#/home/signup')
  }

  setEmail(email) {
    element(by.formControlName('email')).sendKeys(email);
  }

  setFullName(full_name) {
    element(by.formControlName('fullName')).sendKeys(full_name);
  }

  setUserName(user_name) {
    element(by.formControlName('userName')).sendKeys(user_name);
  }

  setPassword(password) {
    element(by.formControlName('password')).sendKeys(password); 
  }

  btnRegister() {
    return element(by.buttonText('Register'));
  }

  registerUserUsingData(email, fullName, userName, password) {
    this.setEmail(email);
    this.setFullName(fullName);
    this.setUserName(userName);
    this.setPassword(password);
    this.btnRegister().click();
  }

  registerUser(formControlName, value) {
    return element(by.formControlName(formControlName)).sendKeys(value);
  }
}