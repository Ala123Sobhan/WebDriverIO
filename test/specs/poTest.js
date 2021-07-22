const loginPage = require("../pageObjects/LoginPage.js");
const checkoutPage = require("../pageObjects/checkoutPage.js");
const reviewPage = require("../pageObjects/reviewPage.js");
const expectchai = require("chai").expect;
const fs = require("fs");
let credentials = JSON.parse(fs.readFileSync("test/testData/loginTest.json"));
let e2eData = JSON.parse(fs.readFileSync("test/testData/e2eTest.json"));

describe("Ecommerce App PO TEST", () => {
  credentials.forEach(({ username, password }) => {
    it("Login fail Smoke", () => {
      browser.maximizeWindow();
      browser.url("https://www.rahulshettyacademy.com/loginpagePractise/#");
      //  console.log(browser.getTitle());
      browser.pause(3000);
      expect(browser).toHaveTitleContaining("Rahul Shetty Academy");

      loginPage.Login(username, password);

      //browser.waitUntil(condition, { timeout, timeoutMsg, interval })

      browser.waitUntil(
        () => loginPage.signInbtn.getAttribute("value") === "Sign In",
        { timeout: 4000, timeoutMsg: "Can get the error msg!" }
      );
      const msg = loginPage.alertMsg.getText();
      console.log("The error msg: " + msg);

      const loginMsg = loginPage.pageText;
      expect(loginMsg).toHaveTextContaining(
        "(username is rahulshettyacademy and Password is learning)"
      );
    });
  });

  e2eData.forEach(({ products }) => {
    it("end to end PO Test Smoke", () => {
      browser.maximizeWindow();
      browser.url("https://www.rahulshettyacademy.com/loginpagePractise/#");
      // var products = ["Blackberry", "Nokia Edge"];

      loginPage.Login("rahulshettyacademy", "learning");

      checkoutPage.chckLink.scrollIntoView();
      checkoutPage.chckLink.waitForClickable();
      browser.pause(4000);

      const cards = checkoutPage.cards;

      checkoutPage.addcardstoCart(products);

      checkoutPage.chckLink.scrollIntoView();

      //browser.pause(3000);

      //console.log("CHECKOUT LINK CLICK");

      checkoutPage.chckLink.click();
      // console.log("CHECK OUT CLICKED");
      const prices = checkoutPage.prices;

      // reduce returs the accumulator value
      const actualtotal = checkoutPage.productpriceSum();
      const expectedTot = checkoutPage.getExpectPrice();

      //console.log(actualtotal + ", " + expectedTot);

      expectchai(actualtotal).to.eq(expectedTot);

      reviewPage.successBtn.click();

      reviewPage.inputBox.waitForExist();
      reviewPage.inputBox.setValue("united");
      reviewPage.loadingIcon.waitForExist({ reverse: true });

      reviewPage.desiredCountry.click();
      reviewPage.purchaseBtn.click();
      const text = reviewPage.successMsg.getText();

      //console.log(text)

      expectchai(text).contains(
        "Success! Thank you! Your order will be delivered in next few weeks"
      );
    });
  });
});
