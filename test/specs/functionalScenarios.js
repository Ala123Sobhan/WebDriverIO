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

  xit("double click alert box handling", () => {
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

  it("Web Table Validation", () => {
    browser.maximizeWindow();
    browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    $("thead tr th:nth-child(1)").click();

    const vegListLocators = $$("tbody tr td:nth-child(1)");
    const veg = vegListLocators.map((v) => v.getText());
    console.log(veg);
    const sortedVeg = veg.sort();
    console.log(sortedVeg);

    chaiexpect(veg).to.equal(sortedVeg);
  });
});
