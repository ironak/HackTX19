$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
});

$("#good").on("click", function() {
    $("#good").hide();
})

var products = new ["cheezits", "gogo squeez", "rice crispies", ""];

$("search").on("input", function(){
    var input = document.getElementById("search").value();
        switch(input){
            case "cheezits":
                window.location.href = "/midsustainable.html";
                break;

            case "gogo squeez":
                window.location.href = "/notsustainable.html";
                break;

            case "rice crispies":
                window.location.href = "file:///Users/julia_hathaway/Library/Mobile%20Documents/com~apple~CloudDocs/CS314H/Boggle/HackTX19/public/sustainable.html";
                break;
        }
});


$('#search').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        var input = document.getElementById("search").value();
        switch(input){
            case "cheezits":
                window.location.href = "/midsustainable.html";
                break;

            case "gogo squeez":
                window.location.href = "/notsustainable.html";
                break;

            case "rice crispies":
                window.location.href = "file:///Users/julia_hathaway/Library/Mobile%20Documents/com~apple~CloudDocs/CS314H/Boggle/HackTX19/public/sustainable.html";
                break;
        }
    }
});