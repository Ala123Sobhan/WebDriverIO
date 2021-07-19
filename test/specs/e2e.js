describe("ecommerce web", () => {
  it("end to end test", () => {
    browser.maximizeWindow();
    browser.url("https://www.rahulshettyacademy.com/loginpagePractise/#");
    var products = ["Blackberry", "Nokia Edge"];
    $("#username").setValue("rahulshettyacademy");
    $("#password").setValue("learning");
    $("#terms").click();
    $("#signInBtn").click();

    const chkLink = $("*=Checkout");
    chkLink.waitForExist();

    const cards = $$("div[class = 'card h-100']");

    cards
      .filter((card) => products.includes(card.$("div h4 a").getText()))
      .map((desiredCard) => desiredCard.$(".card-footer button").click());

    $("*=Checkout").scrollIntoView();

    browser.pause(3000);
  });
});
