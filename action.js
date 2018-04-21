// alert("CONNECTED");



// var firstName  = document.getElementById("InputFirstName").value;
// var secondName = document.getElementById("InputLastName").value;
// var email      = document.getElementById("InputEmail").value;
// var language   = document.getElementById("languuage").value;


$(document).ready(function(){
	    $('.login-form').hide();

	    $("#register").click(function()
	    {
	    	$(".register-form").hide();
	    	$(".login-form").show();
	    });

	    $(".login-reg-btn").click(function()
	    {
	    	$(".login-form").hide();
	    	$(".register-form").show();
	    })

    });



