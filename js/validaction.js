function validateForm() {
    var un = document.loginform.names.value;
    var lg = document.loginform.emails.value;
    var sw = document.loginform.soobch.value;
    var username = "names";
    var login = "emails";
    var massage = "soobch";
    if ((un == username) && (lg == login) && (sw == massage)) {
    window.location = "D:\ПСIП\ПРАКТИКА ПСИП\main.html";
    return true;
    }
    else {
    alert ("Данные введены неккоректно, проверьте себя");
    return false;
    }
    }