// Validating Empty Field
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('phone').value == "" || document.getElementById('email').value == "" ||
        document.getElementById('service').value == "" || document.getElementById('date').value == "" || document.getElementById('slot').value == "") {
        alert("Fill All Fields !");
    } else {
        document.getElementById('form').submit();
        alert("Booking Submitted Successfully...");
    }
}
//Function To Display Popup
function div_show() {
    document.getElementById('pb-form').style.display = "block";
}
//Function to Hide Popup
function div_hide() {
    document.getElementById('pb-form').style.display = "none";
}