// var totalCosts = [];

// function Order(size, crust, nonVegTopping, vegTopping) {
//     this.size = size;
//     this.crust = crust;
//     this.nonVegTopping = nonVegTopping;
//     this.vegTopping = vegTopping;
//     this.price = 0;

// }


// var pizzaSize = ["Small", "Medium", "Large"];
// var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
// var pizzanonVegTopping = ["Chicken", "Sausage", "Bacon", ];
// var pizzavegTopping = ["Mushroom", "Onion", "Capsicum", ];

// Order.prototype.cost = function() {
//     if (this.size === pizzaSize[0]) {
//         this.price += 500;
//     } else if (this.size === pizzaSize[1]) {
//         this.price += 700;
//     } else if (this.size === pizzaSize[2]) {
//         this.price += 900;
//     }

//     if (this.crust === pizzaCrust[0]) {
//         this.price += 100;
//     } else if (this.crust === pizzaCrust[1]) {
//         this.price += 100;
//     } else if (this.crust === pizzaCrust[2]) {
//         this.price += 50;
//     }

//     if (this.nonVegTopping === pizzanonVegTopping[0]) {
//         this.price += 300;
//     } else if (this.nonVegTopping === pizzanonVegTopping[1]) {
//         this.price += 300;
//     } else if (this.nonVegTopping === pizzanonVegTopping[2]) {
//         this.price += 300;
//     }


//     if (this.vegTopping === pizzavegTopping[0]) {
//         this.price += 200;
//     } else if (this.vegTopping === pizzavegTopping[1]) {
//         this.price += 200;
//     } else if (this.vegTopping === pizzavegTopping[2]) {
//         this.price += 200;
//     }

//     return this.price;

// }
// Order.prototype.totalCost = function() {
//     var orderTotal = 0
//     for (var order = 0; order < totalCosts.length; order++) {
//         orderTotal += totalCosts[order];

//     };

//     return orderTotal;
// }



var totalCharges = [];

function Order(size, crust) {

    this.size = size;
    this.crust = crust;
    this.vegToppings1 = 200;
    this.vegToppings2 = 200;
    this.vegToppings3 = 200;
    this.nonVegToppings1 = 300;
    this.nonVegToppings2 = 300;
    this.nonVegToppings3 = 300;
    this.price = 0;
};

Order.prototype.pizzaCost = function() {
    if (this.size === "Small") {
        this.price += 500;

    } else if (this.size === "Medium") {
        this.price += 700;

    } else if (this.size === "Large") {
        this.price += 900;

    } else if (this.crust === "Crispy") {
        this.price += 100;

    } else if (this.crust === "Stuffed") {
        this.price += 100;

    } else if (this.crust === "Gluten free") {
        this.price += 50;
    };

    this.price = this.vegToppings1;
    this.price = this.vegToppings2;
    this.price = this.vegToppings3;
    this.price = this.nonVegToppings1;
    this.price = this.nonVegToppings2;
    this.price = this.nonVegToppings3;

}
















































$(document).ready(function() {

    $("input#order1").click(function(event) {

        event.preventDefault();

        var sizes = $("select#piz").val();
        var crusts = $("select#crus").val();
        var vegToppings = $("select#topveg").val();
        var nonVegToppings = $("select#topnoveg").val();

        var newPizzaOrder = new Order(sizes, crusts, vegToppings, nonVegToppings);
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);

        $("p#sz").text(sizes);
        $("p#cr").text(crusts);
        $("p#nvgs").text(vegToppings);
        $("p#vgs").text(nonVegToppings);
        $("p#tc").text(newPizzaOrder.totalCost());
    });

    $("#order2").click(function() {
        prompt("Please insert you name")
        prompt("Please insert you location")
        prompt("Please insert your addrress")
        alert("You will be charged an extra 200 for delivery")
        alert("Thank you for Your Purchase!Your order will be delivered to your location in a few minutes 🍕 🚚")


    });

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