
//var bot = require("../functions/index.js");
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


	   	$("#registeFunc").click(function(e)
	   	{
	   		e.preventDefault();
			 var firstName  = document.getElementById("InputFirstName").value;
			 var lastName = document.getElementById("InputLastName").value;
			 var email      = document.getElementById("InputEmail").value;
			 var password =  document.getElementById("InputPassword").value;
			 var language   = document.getElementById("language").value;
	   		 //call to write new user data and authenticate function
	   		//bot.writeUserData(firstName,lastName,email,password, language);

	   	});
});





