const chaiexpect = require("chai").expect;

describe("JS functional testing", () => {
  xit("scrolling and mouse over", () => {
    browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
    $("#mousehover").scrollIntoView();
    //browser.pause(2000);
    $("#mousehover").moveTo();
    //  browser.pause(2000);
    $("=Top").click();
    browser.pause(3000);
  });

  it("double click alert box handling", () => {
    browser.url("http://only-testing-blog.blogspot.com/");
    $("button").scrollIntoView();
    browser.pause(2000);
    $("button").doubleClick();

    // console.log(browser.isAlertOpen());
    chaiexpect(browser.isAlertOpen()).to.be.true;
    // console.log(browser.getAlertText());
    chaiexpect(browser.getAlertText()).to.equal(
      "Press 'OK' or 'Cancel' button!"
    );
    browser.acceptAlert();
    // browser.dismissAlert()
  });
});
