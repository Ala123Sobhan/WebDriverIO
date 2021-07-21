class checkout{

    get chckLink(){
       return $("*=Checkout");
    }

    get cards(){
       return $$("div[class = 'card h-100']");
    }

    get prices(){
        return $$("tr td:nth-child(4) strong");
    }

    get expectedPrice(){
        return $("[class = 'text-right'] h3 strong");
    }
    addcardstoCart(products){

        this.cards
        .filter((card) => products.includes(card.$("div h4 a").getText()))
        .map((desiredCard) => desiredCard.$(".card-footer button").click());

    }


    productpriceSum(){
     const proPrice = this.prices.map((p) => parseInt(p.getText().split(".")[1].trim()));
     //console.log(proPrice);

    // reduce returs the accumulator value
    const total = proPrice.reduce((sum, price) => sum + price, 0);
    //console.log(total);
    return total;

}

   getExpectPrice(){
       return parseInt(
       this.expectedPrice.getText().split(".")[1].trim()
      );
   }


}

module.exports = new checkout();