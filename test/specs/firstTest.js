describe("Ecommerce App", () => {
  it("Login page title", () => {
    browser.maximizeWindow();
    
    browser.url("https://www.rahulshettyacademy.com/loginpagePractise/#");
    console.log(browser.getTitle());
    browser.pause(3000);
    expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
    $("input[id = 'username']").setValue("Ala Sobhan");

    const pass = $("//input[@type = 'password']");
    pass.setValue("Bob123");
    const signIn = $("#signInBtn");
    //browser.pause(3000);
    signIn.click();

    const msg = $(".alert-danger").getText();
    console.log("The error msg: " + msg);

    //browser.waitUntil(condition, { timeout, timeoutMsg, interval })

    browser.waitUntil(
      () => $("#signInBtn").getAttribute("value") === "Sign In",
      { timeout: 4000, timeoutMsg: "Can get the error msg!" }
    );
  });
});
