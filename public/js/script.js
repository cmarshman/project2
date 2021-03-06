$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $("#gift_search").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("button working");
    
    var inputVal = $("#inputInfo").val();
    var giftBtn = document.createElement("button");
    
    giftBtn.innerHTML = inputVal;
    document.getElementById("giftVal").prepend(giftBtn);
    
    console.log(inputVal);
    
    
    var newGift = {
      gift_name: $("#inputInfo").val(),
    };
    console.log('>>> test'); // TODO: Remove
    
    // Send the POST request.
    $.ajax("/api/gifts", {
      type: "POST",
      data: newGift
    }).then(
      function () {
        console.log("created new gift");
        
        // Reload the page to get the updated list
        // location.reload();
        // getDataFromEtsyApi(newGift.gift_name, displayEtsySearchData);
      }
    );
  });

  $(".delgift").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/gifts/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".giftBtns").on("click", function (event) {
    console.log("button working");
    console.log($(this).html());
    // Ask about how to show just the value of the button and not the element as well
    // $("input:text").val($(this).html());
  });

});
