const expectchai = require("chai").expect;

describe("Ecommerce App", () => {
  xit("login form", () => {
    browser.maximizeWindow();
    browser.url("https://www.rahulshettyacademy.com/loginpagePractise/#");
    $("input[id = 'username']").setValue("rahulshettyacademy");
    const pass = $("//input[@type = 'password']");
    pass.setValue("learning");

    const radioBtn = $$(".customradio");

    radioBtn[1].$(".radiotextsty").click();

    const modal = $(".modal-content");
    modal.waitForDisplayed();

    $("#cancelBtn").click();
    const usBtn = radioBtn[1].$(".radiotextsty");

    // browser.pause(1000);
    console.log(usBtn.isSelected());

    // const signIn = $("#signInBtn");
    //signIn.click();
    //browser.pause(3000);

    radioBtn[1].$(".radiotextsty").click();
    modal.waitForDisplayed();
    $("#okayBtn").click();
    console.log(usBtn.isSelected());

    radioBtn[0].$(".radiotextsty").click();
    expect(modal).not.toBeDisplayed();

    //static dropdowns

    const dropdown = $("select.form-control");
    dropdown.selectByAttribute("value", "stud");

    // browser.pause(2000);

    dropdown.selectByVisibleText("Teacher");

    //browser.pause(2000);

    dropdown.selectByIndex(2);
    //browser.pause(2000);
    expectchai(dropdown.getValue()).to.equal("consult");
  });

  it("Dynamic dropdown", () => {
    browser.maximizeWindow();
    browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");

    //auto suggest dropdown
    $("#autocomplete").setValue("Ban");
    browser.pause(2000);
    let list = $$("[class = 'ui-menu-item'] div");

    list.forEach((l) => console.log(l.getText()));
    let desiredC = list.filter((l) => l.getText() === "Bangladesh");
    desiredC[0].click();
    browser.pause(2000);

   // console.log(desiredC[0].isSelected());

  // console.log($("#autocomplete").getAttribute("value"))

  expectchai($("#autocomplete").getAttribute("value")).to.equal("Bangladesh")

  });
});
