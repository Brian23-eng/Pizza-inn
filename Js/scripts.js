//business logic

var totalCosts = [];

function Order(size, vegTopping, nonVegTopping, crust) {

    this.size = size;
    this.veg = vegTopping;
    this.nonVeg = nonVegTopping;
    this.crust = crust;
    this.price = 0;
}

var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaVegTopping = ["Mushrooms", "Onions", "Capsicum"];
var pizzaNonVegTopping = ["Chicken", "Sausage", "Bacon"];

Order.prototype.cost = function() {

    //determining price in relation to size

    if (this.size === pizzaSize[0]) {
        this.price += 500;

    } else if (this.size === pizzaSize[1]) {
        this.price += 700;

    } else if (this.size === pizzaSize[2]) {

        this.price += 900;

        //determining price according to the crust chosen

    } else if (this.crust === pizzaCrust[0]) {
        this.price += 100;

    } else if (this.crust === pizzaCrust[1]) {
        this.price += 100;

    } else if (this.crust === pizzaCrust[2]) {
        this.price += 50;

        //determining price according to veges or non veges

    } else if (this.veg === pizzaVegTopping[0]) {
        this.price += 200;

    } else if (this.veg === pizzaVegTopping[1]) {
        this.price += 200;

    } else if (this.veg === pizzaVegTopping) {
        this.price += 200;

    } else if (this.nonVeg === pizzaNonVegTopping[0]) {
        this.price += 300;


    } else if (this.nonVeg === pizzaNonVegTopping[1]) {
        this.price += 300;

    } else if (this.nonVeg === pizzaNonVegTopping[2]) {
        this.price += 300;


    };
    return this.price;
}



Order.prototype.totalCost = function() {
    var orderTotal = 0;
    for (var order = 0; order < totalCosts.length; order++) {
        orderTotal += totalCosts[order];
    }
    return orderTotal;
}



$(document).ready(function() {

    $("input#order1").click(function(event) {

        event.preventDefault();

        var inputtedSize = $("select#piz").val();
        var inputtedCrust = $("select#crus").val();
        var inputtedVegTopping = $("select#topveg").val();
        var inputtedNonVegTopping = $("select#topnoveg").val();

        var newPizzaOrder = new Order(inputtedSize, inputtedCrust, inputtedVegTopping, inputtedNonVegTopping);
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);

        $("p#sz").val("").text(inputtedSize);
        $("p#cr").val("").text(inputtedCrust);
        $("p#nvgs").val("").text(inputtedNonVegTopping);
        $("p#vgs").val("").text(inputtedVegTopping);
        $("p#tc").text(newPizzaOrder.totalCost());
    });

    $("#order2").click(function() {
        prompt("Please insert you name")
        prompt("Please insert you location")
        prompt("Please insert your addrress")
        alert("You will be charged an extra 200 for delivery")
        alert("Thank you for Your Purchase!Your order will be delivered to your location in a few minutes 🍕 🚚")


    });
})








// //user interface one
// $(document).ready(function() {

//     $(".picha").click(function() {

//         $(".jaza").fadeToggle("slow");
//     });

//     $(".eve1").hover(function() {
//         $(".para").slideToggle(1000);
//         $("#img1").slideToggle(1000);
//         $(".para").show();
//     });
//     $(".eve2").hover(function() {
//         $(".para1").slideToggle(1000);
//         $("#img2").slideToggle(1000);
//         $(".para1").show();
//     });
//     $(".eve3").hover(function() {
//         $(".para2").slideToggle(1000);
//         $("#img3").slideToggle(1000);
//         $(".para2").show();
//     });
//     $(".eve4").hover(function() {
//         $(".para3").slideToggle(1000);
//         $("#img4").slideToggle(1000);
//         $(".para3").show();
//     });
// })z