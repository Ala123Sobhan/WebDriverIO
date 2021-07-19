const fetch = require("node-fetch");
const chaiexpect = require("chai").expect;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
describe("Window Frames", () => {
  xit("parent and child window switch", () => {
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
    browser.pause(3000);
    console.log(browser.getAlertText());
    browser.acceptAlert();
  });

  xit("Handling frames", () => {
    //no direct access to embedded frames from browser, switch to frame to access it

    browser.maximizeWindow();
    browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");

    $("#courses-iframe").scrollIntoView();
    console.log($$("a").length);
    browser.switchToFrame($("iframe#courses-iframe"));
    console.log($$("a").length);
    console.log($("=Courses").getTagName());
    //switch to default content
    browser.switchToFrame(null);
    console.log($$("a").length);
  });

  it("Footer link Validation", () => {
    browser.maximizeWindow();
    browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");

    var linkReport = [];
    $("#gf-BIG").scrollIntoView();
    const links = $$("[class = gf-t] a").map((l) => l.getAttribute("href"));
    console.log("link numbers: " + links.length);
    //console.log(links);
    const requests = links.map((url) => browser.call(() => fetch(url)));
    const statusCodes = requests.map((response) => response.status);

    /*statusCodes.forEach((st) => {
      chaiexpect(st).to.be.below(400);
    });*/
    requests.forEach((res) => {
      //console.log(res.url + " :  " + res.status);
      if (res.status >= 400) {
        console.log(res.url + " failed with a status of " + res.status);
        chaiexpect(res.status).to.be.below(400);
      }
    });
  });
});
