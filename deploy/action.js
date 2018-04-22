
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


	   	$(".register-btn").click(function(e)
	   	{
	   		e.preventDefault();
	   		var name =  $("input[name='firstname']").val();
	   		var last_name = $("input[name='lastname']").val();
	   		var email =  $("input[name='email']").val();
	   		var password = $("input[name='password']").val();
	   		var language = $("#language").val();

	   		console.log(name+ " "+ last_name+" "+email+" "+password+" "+language);
	   	});
});



// var firstName  = document.getElementById("InputFirstName").value;
// var secondName = document.getElementById("InputLastName").value;
// var email      = document.getElementById("InputEmail").value;
// var language   = document.getElementById("languuage").value;

