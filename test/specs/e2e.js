const expectchai = require("chai").expect;

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

    chkLink.scrollIntoView();

    //browser.pause(3000);

    chkLink.click();
    const price = $$("tr td:nth-child(4) strong");

    var proPrice = price.map((p) => parseInt(p.getText().split(".")[1].trim()));
    console.log(proPrice);

    // reduce returs the accumulator value
    const total = proPrice.reduce((sum, price) => sum + price, 0);
    console.log(total);

    const actualTot = parseInt(
      $("[class = 'text-right'] h3 strong").getText().split(".")[1].trim()
    );

    //console.log("actual :" + actualTot);

    expectchai(actualTot).to.eq(total);

    $(".btn.btn-success").click();
    const inputbox = $("#country");

    inputbox.waitForExist();
    inputbox.setValue("united");
    $(".lds-ellipsis").waitForExist({ reverse: true });

    $("*=United States of").click();
    $(".btn.btn-success.btn-lg").click();
    const text = $(".alert-success").getText();

    //console.log(text)

    expectchai(text).contains("Success! Thank you! Your order will be delivered in next few weeks");

  });
});
