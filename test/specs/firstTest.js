describe("Ecommerce App", () => {
  xit("Login fail page title", () => {
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

    //const msg = $(".alert-danger").getText();
    //console.log("The error msg: " + msg);

    //browser.waitUntil(condition, { timeout, timeoutMsg, interval })

    browser.waitUntil(
      () => $("#signInBtn").getAttribute("value") === "Sign In",
      { timeout: 4000, timeoutMsg: "Can get the error msg!" }
    );
    const msg = $(".alert-danger").getText();
    console.log("The error msg: " + msg);

    const loginMsg = $("p.text-white");
    expect(loginMsg).toHaveTextContaining(
      "(username is rahulshettyacademy and Password is learning)"
    );
  });

  xit("Login success page title", () => {
    browser.maximizeWindow();
    browser.url("https://www.rahulshettyacademy.com/loginpagePractise/#");
    browser.pause(3000);
    expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
    $("input[id = 'username']").setValue("rahulshettyacademy");
    const pass = $("//input[@type = 'password']");
    pass.setValue("learning");
    const signIn = $("#signInBtn");
    signIn.click();
    const chkBtn = $("*=Checkout");
    //chkBtn.click();
    chkBtn.waitForExist();
    chkBtn.click();
    expect(browser).toHaveTitleContaining("ProtoCommerce");
  });
});
