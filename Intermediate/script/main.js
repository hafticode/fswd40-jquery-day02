$("#cart").hide();
$(document).ready(function(){
    
    data = JSON.parse(items);

    $('#cart-tab').on('click', function() {
        $('#cart').slideToggle(250);
    })

    shoppingCart = [];

    // function addItem() {
    //     shoppingCart.push(1)
    // } 

    // $("#button1").on("click", console.log("dgsdfg"))
    
    
    
    $("#button1").on("click", function(){
        shoppingCart.push(data[0])
        // $('#cart').append("<div id=\"cart-item\"></div>")
        div1 = document.createElement("div");
        $(div1).addClass("cart-item")
        $('#cart').append(div1);
        innerDiv = document.createElement("div");
        $(innerDiv).addClass("cart-item-img")
        $(div1).append(innerDiv)
        img1 = $("<img>");
        img1.attr("src", data[0].image)
        $(innerDiv).append(img1)
        $(div1).append(`<div class=\"cart-item-text\"><p>${data[0].name}</p><p>${data[0].price}</p></div>`)
    })


})