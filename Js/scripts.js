//user interface one
$(document).ready(function() {

    $(".picha").click(function() {

        $(".jaza").fadeToggle("slow");
    });

    $(".eve1").hover(function() {
        $(".para").slideToggle(1000);
        $("#img1").slideToggle(1000);
        $(".para").show();
    });
    $(".eve2").hover(function() {
        $(".para1").slideToggle(1000);
        $("#img2").slideToggle(1000);
        $(".para1").show();
    });
    $(".eve3").hover(function() {
        $(".para2").slideToggle(1000);
        $("#img3").slideToggle(1000);
        $(".para2").show();
    });
    $(".eve4").hover(function() {
        $(".para3").slideToggle(1000);
        $("#img4").slideToggle(1000);
        $(".para3").show();
    });
})


//business logic

var totalCost = [];

function Order(size, vegToppings, nonVegToppings, crust) {

    this.size = size;
    this.veg = vegToppings;
    this.nonVeg = nonVegToppings;
    this.crust = crust;
    this.price = 0;
}

var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"]