describe("JS functional testing", () => {
  it("scrolling and mouse over", () => {
    browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
    $("#mousehover").scrollIntoView();
    //browser.pause(2000);
    $("#mousehover").moveTo();
    //  browser.pause(2000);
    $("=Top").click();
    browser.pause(3000);
  });
});
