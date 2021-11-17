var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

var re_onload = function(){
    grecaptcha.render("recap", {
        "sitekey" : "6LdwvTgdAAAAAHOg1zDWhL5Ouci5ddslFp0i1VZC"
    });
};

loop = setInterval(function(){
    var response = grecaptcha.getResponse();
    if(response.length != 0){
        window.location.href = urlParams.get("url");
        clearInterval(loop);
    }
},1);