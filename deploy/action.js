
// CODE THAT CHANGES FROM REGIESTER FORM TO LOGIN FORM //
$(document).ready(function(){
	    $('.login-form').hide();

	    $("#register").click(function()
	    {
	    	$(".register-form").hide('slow');
	    	$(".login-form").show('slow');
	    });

	    $(".login-reg-btn").click(function()
	    {
	    	$(".login-form").hide('slow');
	    	$(".register-form").show('slow');
	   	})
});



// var firstName  = document.getElementById("InputFirstName").value;
// var secondName = document.getElementById("InputLastName").value;
// var email      = document.getElementById("InputEmail").value;
// var language   = document.getElementById("languuage").value;

