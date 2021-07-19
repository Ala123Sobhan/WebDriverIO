describe("Window Frames", () => {
  it("parent and child window switch", () => {
    browser.maximizeWindow();
    browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");

    $("[onclick *= 'openWindow']").click();
    const handles = browser.getWindowHandles();

    browser.switchToWindow(handles[1]);
    console.log(browser.getTitle());
    browser.closeWindow();
    browser.switchToWindow(handles[0]);
    console.log(browser.getTitle());

    browser.newWindow("https://w3c.github.io/webdriver/#css-selectors");
    const title = browser.getTitle();
    browser.switchWindow(
      "https://www.rahulshettyacademy.com/AutomationPractice/"
    );
    $("#name").setValue(title);
    browser.pause(2000);
    console.log(browser.getTitle());

    $("#alertbtn").click();
    browser.pause(3000)
    console.log(browser.getAlertText());
    browser.acceptAlert();
  });
});
