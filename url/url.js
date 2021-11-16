var re_onload = function(){
    grecaptcha.render("recap", {
        "sitekey" : "6LdwvTgdAAAAAHOg1zDWhL5Ouci5ddslFp0i1VZC"
    });
};

setInterval(function(){
    var response = grecaptcha.getResponse();
    if(response.length != 0){
        console.log("yes");
    }
},1);