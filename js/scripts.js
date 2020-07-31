// Validating Empty Field
function check_empty() {
    if (
        document.getElementById("fname").value == "" ||
        document.getElementById("lname").value == "" ||
        document.getElementById("phone").value == "" ||
        document.getElementById("email").value == "" ||
        document.getElementById("date").value == "" ||
        document.getElementById("slot").value == ""
    ) {
        alert("Fill All Fields !");
    } else {
        document.getElementById("form").submit();
        alert("Booking Submitted Successfully...");
    }
}
/*Function To Display Popup
function div_show() {
    document.getElementById('pb-form').style.display = "block";
}
Function to Hide Popup
function div_hide() {
    document.getElementById('pb-form').style.display = "none";*/

//Function for Contact-us form notifications
$(document).ready(function() {
    $("form#message-form").submit(function(event) {
        var name = $("input#name").val();
        var email = $("input#usermail").val();
        var message = $("textarea#comment").val();
        if ($("input#name").val() && $("input#usermail").val()) {
            alert(
                name +
                ", we have received your message. Thank you for reaching out to us."
            );
        } else {
            alert("Please enter your name and email!");
        }
    });
});
//to cater for the services section
$(document).ready(function() {
    $("#spa-image").click(function() {
        $("#spa-image").slideDown("2500").hide("2000");
        $("#Spa").show("2500");
    });
    $("#Spa").click(function() {
        $("#Spa").slideUp("2500");
        $("#spa-image").slideDown("2500");
    });
});

$(document).ready(function() {
    $("#bridal-image").click(function() {
        $("#bridal-image").slideDown("2500").hide("2000");
        $("#haircare").show("2500");
    });
    $("#haircare").click(function() {
        $("#haircare").slideUp("2500");
        $("#bridal-image").slideDown("2500");
    });
});

$(document).ready(function() {
    $("#barber-image").click(function() {
        $("#barber-image").slideDown("500").hide("200");
        $("#barber").show("500");
    });
    $("#barber").click(function() {
        $("#barber").slideUp("500");
        $("#barber-image").slideDown("500");
    });
});