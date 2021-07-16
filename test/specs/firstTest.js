describe("Ecommerce App", () => {
  it("Login page title", () => {
    browser.url("https://www.rahulshettyacademy.com/loginpagePractise/#");
    console.log(browser.getTitle());
    browser.pause(3000);
  });
});
