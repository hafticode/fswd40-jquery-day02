$("#cart").hide();
$(document).ready(function(){
    
    data = JSON.parse(items);

    $('#cart-tab').on('click', function() {
        $('#cart').slideToggle(250);
    })

    shoppingCart = [];
    
   for (let i = 0; i < $(".addToCartButton").length; i++) {
       
       $(`.addToCartButton:eq(${i})`).on("click", function(){
           if (containsObject(data[i], shoppingCart)) {
               shoppingCart[i].count += 1
               shoppingCart[i].sum = shoppingCart[i].price * shoppingCart[i].count
               totalSum = shoppingCart[0].sum
               if (typeof shoppingCart[1] != 'undefined') {totalSum += shoppingCart[1].sum}
               if (typeof shoppingCart[2] != 'undefined') {totalSum += shoppingCart[2].sum}
               if (typeof shoppingCart[3] != 'undefined')  {totalSum += shoppingCart[3].sum}
               $(`.cart-item-text:eq(${i}) p:first-child`).html(`${shoppingCart[i].name}(${shoppingCart[i].count})`)
               $(`.cart-item-text:eq(${i}) p:nth-child(2)`).html(shoppingCart[i].sum)
               $(`#total`).html(`Total: ${totalSum}`)
            } else {
                

               shoppingCart.push(data[i])
               div1 = document.createElement("div");
               $(div1).addClass("cart-item")
               $('#cart').append(div1);
               innerDiv = document.createElement("div");
               $(innerDiv).addClass("cart-item-img")
               $(div1).append(innerDiv)
               img1 = $("<img>");
               img1.attr("src", data[i].image)
               $(innerDiv).append(img1)
               $(div1).append(`<div class=\"cart-item-text\"><p>${data[i].name}</p><p>${data[i].price}</p></div>`)
           }
       })
       
   }
//    for (let i = 0; i < $(".addToCartButton").length; i++) {
       
//        $(`.addToCartButton:eq(${i})`).on("click", function(){
//            shoppingCart.push(data[i])
//            div1 = document.createElement("div");
//            $(div1).addClass("cart-item")
//            $('#cart').append(div1);
//            innerDiv = document.createElement("div");
//            $(innerDiv).addClass("cart-item-img")
//            $(div1).append(innerDiv)
//            img1 = $("<img>");
//            img1.attr("src", data[i].image)
//            $(innerDiv).append(img1)
//            $(div1).append(`<div class=\"cart-item-text\"><p>${data[i].name}</p><p>${data[i].price}</p></div>`)
//        })
       
//    }
    
    function containsObject(obj, list) {

    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

})

