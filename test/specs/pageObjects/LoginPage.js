class LoginPage {
  get userName() {
    return $("input[id = 'username']");
  }

  get passWord() {
    return $("//input[@type = 'password']");
  }

  get signInbtn() {
    return $("#signInBtn");
  }

  get alertMsg() {
    return $(".alert-danger");
  }

  get pageText() {
    return $("p.text-white");
  }

  Login(name, pass) {
    this.userName.setValue(name);
    this.passWord.setValue(pass);

    this.signInbtn.click();
  }
}

module.exports = new LoginPage();
