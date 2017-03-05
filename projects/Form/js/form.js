function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert(" First Name must be filled out");
        return false;
    }

    var x = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("Last Name must be filled out");
        return false;
    }
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
   
}