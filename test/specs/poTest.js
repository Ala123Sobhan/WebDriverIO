const loginPage = require("./pageObjects/LoginPage.js");
const checkoutPage = require("./pageObjects/checkoutPage");
const reviewPage = require("./pageObjects/reviewPage.js");
const expectchai = require("chai").expect;
describe("Ecommerce App PO TEST", () => {
  xit("Login fail", () => {
    browser.maximizeWindow();
    browser.url("https://www.rahulshettyacademy.com/loginpagePractise/#");
    //  console.log(browser.getTitle());
    browser.pause(3000);
    expect(browser).toHaveTitleContaining("Rahul Shetty Academy");

    loginPage.Login("rahulshettyacademy", "learning12");

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

  it("end to end PO Test", () => {
    browser.maximizeWindow();
    browser.url("https://www.rahulshettyacademy.com/loginpagePractise/#");
    var products = ["Blackberry", "Nokia Edge"];

    loginPage.Login("rahulshettyacademy", "learning");

    checkoutPage.chckLink.waitForExist();

    const cards = checkoutPage.cards;

    checkoutPage.addcardstoCart(products);

    checkoutPage.chckLink.scrollIntoView();

    //browser.pause(3000);

    checkoutPage.chckLink.click();
    const prices = checkoutPage.prices;

    // reduce returs the accumulator value
    const actualtotal = checkoutPage.productpriceSum();
    const expectedTot = checkoutPage.getExpectPrice();

    console.log(actualtotal + ", " + expectedTot);

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
