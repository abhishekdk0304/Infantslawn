/**
* Template Name: Company - v4.7.0
* Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
 
 
 
 
 
})()

function sendemail(){
	$.post('http://localhost:8080/sendemail',   // url
       { MyData: {
    "subject":"Postman heroku Testing",
    "message":"Testing the Post request",
    "email":"dka914@gmail.com"
} }, // data to be submit
       function(data, status, jqXHR) {// success callback
                console.log(data);
				console.log(status);
        })
}

function sendemailAjax(){
	
	var finalurl="https://infantslawn.herokuapp.com/sendemail";
	//finalurl="http://localhost:8080/sendemail";
	var formemail=$("#email").val();
	var formsubject=$("#subject").val();
	var formmessage= "Dear" +$("#name").val()+$("#message").val();
	
	var errormessagelbl="An error has occured.Please try again after sometime";
	
	$.ajax({
    url: finalurl,
    type: 'POST',
    dataType: 'json',
    data: {subject:formsubject,message:formmessage,email:formemail},
    success: function (res,status) {
        console.log(res);
		console.log(status);
		if(status=="success"){
			$('.sent-message').show();
			ResetFeilds();
		}else{
			$('.error-message').show();
		}
    },
    error: function (jqXhr, textStatus, errorMessage) {
        console.log(errorMessage)
		$('.error-message').show();
    }
});
}

function ResetFeilds(){
	$("#email").val("");
	$("#subject").val("");
	$("#name").val("");
	$("#message").val("")
	
}

// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );
	$('.loading').hide();
	$('.sent-message').hide();
	$('.error-message').hide();
	
	$('#submitbutton').click(function(){
	 
	 sendemailAjax();
	 
     });
	 
	 $('#reset').click(function(){
	 
	 ResetFeilds();

     });
	
});