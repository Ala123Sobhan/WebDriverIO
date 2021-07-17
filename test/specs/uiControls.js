describe("Ecommerce App", () => {
  it("login form", () => {
    browser.maximizeWindow();
    browser.url("https://www.rahulshettyacademy.com/loginpagePractise/#");
    $("input[id = 'username']").setValue("rahulshettyacademy");
    const pass = $("//input[@type = 'password']");
    pass.setValue("learning");

    const radioBtn = $$(".customradio");

    radioBtn[1].$(".radiotextsty").click();

    // const signIn = $("#signInBtn");
    //signIn.click();
    browser.pause(3000);
  });
});
