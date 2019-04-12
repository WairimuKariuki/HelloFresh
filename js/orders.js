var numberPax = "";
var foodSelected = "";

//UI Logic
$(document).ready(function () {
    $(".form").submit(function (event) {
        event.preventDefault()
        numberPax = $("#number").val();
        foodSelected = $("#inputGroupSelect04 option:selected").text();

        //Business Logic
        if (foodSelected === "Kenya Style Pork") {
            ribs = 250 * numberPax;
            salt = 1 * numberPax;
            alert("use " + ribs + " grams of pork ribs");
            alert("use " + salt + " pinch(es) of salt");
        }


        else if (foodSelected === "Juicy Kuku Choma") {
            chickenbreast = 250 * numberPax;
            salt = 1 * numberPax;
            alert("use " + ribs + " grams of chickenbreast");
            alert("use " + salt + " pinch(es) of salt");

        }

        else if (foodSelected === "Party Pizza") {
            flour = 250 * numberPax;
            oil = 50 * numberPax;
            beef = 250 * numberPax;
            yeast = 1 * numberPax;
            salt = 1 * numberPax;

            alert("use " + flour + " grams of flour");
            alert("use " + oil + " ml of oil");
            alert("use " + beef + " grams of beef");
            alert("use " + yeast + " table spoon(s) of salt");
            alert("use " + salt + " pinch(es) of salt")
        }
    })
})