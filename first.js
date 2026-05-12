function redirect() {
    document.getElementById("Button").innerHTML = "Redirecting...";
    setTimeout(function(){
        window.location.href = "contact.html";
    }, 2000);
}