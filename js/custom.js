$(document).ready(()=>{
    $("#send-button").click(sendEmail);
});

function sendEmail(){
    console.log("email function");
    debugger;
    const email = $('.email-input').val();
    const testPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(testPattern.test(email)){
        displayError("email was good");
    }
    else{
        displayError("email was wrong")
    }
}

function displayError(input, message){
    $(input).parent().find('.error-message').text(message);
}