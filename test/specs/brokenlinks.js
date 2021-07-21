const chaiexpect = require("chai").expect;
const fetch = require("node-fetch");

describe("broken link test", function () {
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
  xit("should check the page for broken links", async function () {
    browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");

    // get all the links on the page
    const links = $$("a");

    console.log(links.length);
    const urls = links.map((link) => link.getAttribute("href"));

    const requests = urls.map((url) => fetch(url));

    const responses = await Promise.all(requests);

    const statusCodes = responses.map((response) => response.status);

    statusCodes.forEach((statusCode) => {
      expect(statusCode).to.be.below(400);
    });
  });
});
