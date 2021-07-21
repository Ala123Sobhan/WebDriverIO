class reviewPage {
  get successBtn() {
    return $(".btn.btn-success");
  }

  get inputBox() {
    return $("#country");
  }

  get loadingIcon() {
    return $(".lds-ellipsis");
  }

  get desiredCountry() {
    return $("*=United States of");
  }

  get purchaseBtn() {
    return $(".btn.btn-success.btn-lg");
  }

  get successMsg() {
    return $(".alert-success");
  }



}

module.exports = new reviewPage();
