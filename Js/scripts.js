var totalCosts = [];

function order(size, crust, nonVegTopping, vegTopping) {
    this.size = size;
    this.crust = crust;
    this.nonVegTopping = nonVegTopping;
    this.vegTopping = vegTopping;
    this.price = 0;

}


var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzanonVegTopping = ["Chicken", "Sausage", "Bacon", ];
var pizzavegTopping = ["Mushroom", "Onion", "Capsicum", ];

order.prototype.cost = function() {
    if (this.size === pizzaSize[0]) {
        this.price += 500;
    } else if (this.size === pizzaSize[1]) {
        this.price += 700;
    } else if (this.size === pizzaSize[2]) {
        this.price += 900;
    }

    if (this.crust === pizzaCrust[0]) {
        this.price += 100;
    } else if (this.crust === pizzaCrust[1]) {
        this.price += 100;
    } else if (this.crust === pizzaCrust[2]) {
        this.price += 50;
    }

    if (this.nonVegTopping === pizzanonVegTopping[0]) {
        this.price += 300;
    } else if (this.nonVegTopping === pizzanonVegTopping[1]) {
        this.price += 300;
    } else if (this.nonVegTopping === pizzanonVegTopping[2]) {
        this.price += 300;
    }


    if (this.vegTopping === pizzavegTopping[0]) {
        this.price += 200;
    } else if (this.vegTopping === pizzavegTopping[1]) {
        this.price += 200;
    } else if (this.vegTopping === pizzavegTopping[2]) {
        this.price += 200;
    }

    return this.price;

}
order.prototype.totalCost = function() {
    var orderTotal = 0
    for (var order = 0; order < totalCosts.length; order++) {
        orderTotal += totalCosts[order];

    };

    return orderTotal;
}






$(document).ready(function() {

    $("input#order1").click(function(event) {

        event.preventDefault();

        var inputtedsizes = $("select#piz").val("");
        var inputtedcrusts = $("select#crus").val("");
        var inputtedvegToppings = $("select#topveg").val("");
        var inputtednonVegToppings = $("select#topnoveg").val("");

        var newPizzaOrder = new order(inputtedsizes, inputtedcrusts, inputtedvegToppings, inputtednonVegToppings);
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);


        $("p#sz").text(inputtedsizes);
        $("p#cr").text(inputtedcrusts);
        $("p#vgs").text(inputtedvegToppings);
        $("p#nvgs").text(inputtednonVegToppings);
        $("p#tc").text(newPizzaOrder.totalCosts());


    });

    $("#order2").click(function() {
        prompt("Please insert you name")
        prompt("Please insert you location")
        prompt("Please insert your addrress")
        alert("You will be charged an extra 200 for delivery")
        alert("Thank you for Your Purchase!Your order will be delivered to your location 🍕 🚚")

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


function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var text = document.getElementById("text").value;



    if (name === "") {
        alert("Please write your name!");

    } else if (email === "") {
        alert("Please write your name!");

    } else if (text === "") {

        alert("Please write a message");

    } else {

        alert("We have recieved  your message dear " + name + ", " + " thank you for getting in touch with us");
    };

}