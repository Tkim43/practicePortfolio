$(document).ready(function(){
    debugger;
    $("#send-button").click(sendEmail);
});

function sendEmail(){
    console.log("email function");
    debugger;
    const email = $('.email-input').val();
    const testPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(testPattern.test(email)){
        alert("email was good");
    }
    else{
        alert("email was wrong")
    }
}