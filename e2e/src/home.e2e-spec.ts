import { SigninPage } from './pageObject/signin';
import { SignUpPage } from './pageObject/signup';
import { browser } from 'protractor';

describe('Home tests', () => {
    let signinPage: SigninPage;
    let signUpPage: SignUpPage;
    let userInfo = [
      { name: 'email', value: 'potato@test.com' },
      { name: 'fullName', value: 'Potato potato' },
      { name: 'userName', value: 'potatoqwe' },
      { name: 'password', value: '12345678' }
    ]

    beforeEach(() => {
      signinPage = new SigninPage();
      signUpPage = new SignUpPage();
      
    });

    it('Should load Signup', () => {
      signUpPage.loadSignUp();
    });

    it('Should register user', () => {
      userInfo.forEach(user => {
        signUpPage.registerUser(user.name, user.value);
      });
      expect(signUpPage.btnRegister().click());
    });

    it('Should verify the url', () => {
      expect(signinPage.verifyUyl()).toBe('http://localhost:4200/#/home');
    });

    it('Should be able to login', () => {
      expect(signinPage.setInputUserName('potatoqwe'));
      expect(signinPage.setInputPassword('12345678'));
      expect(signinPage.getLoginButton().click());
    });
});