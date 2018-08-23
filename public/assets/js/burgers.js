$(function () {
    $(".addBurger").on("click", function (event) {

    })
});

$(".addBurger").on("click", function (event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $(".addBurger").val(),
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function () {
        console.log("adding new burger");
        location.reload();
    }
    );
});