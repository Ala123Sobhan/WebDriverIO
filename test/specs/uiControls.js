describe("Ecommerce App", () => {
  it("login form", () => {
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
    $("#okayBtn").click()
    console.log(usBtn.isSelected())

    radioBtn[0].$(".radiotextsty").click();
    expect(modal).not.toBeDisplayed();
  });
});
