var Pizza = {
  size: 0,
  slices: function() {
    var number = this.size;
    if((this.size/2) % 2 === 0) {
      return number;
    } else {
      return number + 2;
    }
  },
  cost: function() {
    return this.size * 1.25;
  }
};

$(document).ready(function() {

  $('form#new-pizza').submit(function(event) {

    var pizzaSize = parseInt($('select#pizza-size').val());

    var myPizza = Object.create(Pizza);

    myPizza.size = pizzaSize;

    console.log(myPizza.cost());


    $("#slices").text("A pizza with " + myPizza.slices() + " slices");
    $("#price").text("Price: $" + myPizza.cost().toFixed(2));

    event.preventDefault();
  });
});
