 
define(function (require) {
'use strict';

//author luis manon
//import the firabse lib and assign it to the object firebase to use it
var firebase  =  require("firebase");
var admin =  require("firebase-admin");
var serviceAccount =  require("../firebase_permission/Chatslate-e22dae7558a8.json");
var date =  require('date-and-time');

//my xml parser
var parseString =  require('xml2js').parseString;


//macriosoft azure speech translation apiKey
let https =  require('https');
//var  ChatSlateTranslator  =  require('msTranslator');
//==========================================================firebase config===========//
//lets instantiate firebase by database configuration services
var config = {
    apiKey: "AIzaSyB-8PYrO8RvPn6UVmLkyrW3GlsMtD-f3Bk",
    authDomain: "chatslate-3d35b.firebaseapp.com",
    databaseURL: "https://chatslate-3d35b.firebaseio.com",
    projectId: "chatslate-3d35b",
    storageBucket: "chatslate-3d35b.appspot.com",
    messagingSenderId: "616619846824"
};

//lets instantiate our firebase for real time implementation of data
firebase.initializeApp(config);
//==========================================================end of firebase config======//

//======================================================authentication and db reference====//
var defaultApp = admin.initializeApp({
	credential:  admin.credential.cert(serviceAccount),
	databaseURL: "https://chatslate-3d35b.firebaseio.com"
});
var default_auth  =  admin.auth();
var default_db = admin.database();

//======================================================end of authentication and db reference===//

//============================starting translation api ======//
let subscriptionKey = '15a46d14f8b44209abdfb3b307aa4f91';
let host = 'api.microsofttranslator.com';
let path = '/V2/Http.svc/Translate';


//=============================end of textClient for our translator app=====//

function getProfileLanguagePreferenceBaseOnId(userId)
{

}




//lets write user data to an recognized and authenticated user 
function writeUserData(firstN,lastN,email,password,lang)
{
	let now = new Date();
	date.format(now, 'YYYY/MM/DD HH:mm:ss'); 
	default_db.ref('members/').set(
	{
		firstName: firstN,
		lastName : lastN,
		email : email,
		pass : password,
        lang : lang,
        date : now
	});
}


//lets update our works on job literal to let our bot notice this item don't required any further work
function updateWorksOnAttr(messageRef) {
  messageRef.transaction(function(message) {
    if (message) {
      message.BotWork = message.BotWork ? Object.keys(message.BotWork).length : 0;
    }
    return message;
  });
}




//lets start the service real time to have our microsfBot work lol
function getFromToEndMessageBackgroundService()
{
    default_db.ref('chat').child('room-messages').on('child_added', function(postSnapshot) {
    var messageReference = postSnapshot.ref;
    var postId = postSnapshot.key;
   
    //console.log(postSnapshot.val());
   // console.log(postSnapshot.val());
    postSnapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
      
  
         if(item.botwork==0)
         	{
         		//we need our bot to do its work
         		let target = 'fr-fr';
                let params = '?to=' + target + '&text=' + encodeURI("hello world");
         		let response_handler = function (response) {
                let body = '';
                response.on ('data', function (d) {
                body += d;
                 });
                response.on ('end', function () {
                
                //function is giving me the value translated
                 parseString(body, function (err, result) {
                 	var result = JSON.stringify(result);
                 console.dir(result);
                });





                });
                response.on ('error', function (e) {
                console.log ('Error: ' + e.message);
                });
               };//close responder handler

               console.log(host+path+params);
               let Translate = function () {
               let request_params = {
               method : 'GET',
               hostname : host,
               path : path + params,
               headers : {
             'Ocp-Apim-Subscription-Key' : subscriptionKey,
               }
              };
           //lets make the request
               let req = https.request (request_params, response_handler);
                 req.end ();


              }   
           
             //lets translate
              Translate ();

         	}//end of if check

         	 });//end of foreach

        //updateWorksOnAttr(messageReference);
      // [START_EXCLUDE]
     // updateStarCount(firebase.database().ref('user-posts/' + uid + '/' + postId));
      // [END_EXCLUDE]
    }, function(error) {
      console.log('Failed to add "value" listener at /Messages/' + postId + '/botwork node:', error);
    });//close reference

}




//start our background service to work with the bot
getFromToEndMessageBackgroundService();

//writeUserData("luisman1989@gmail.com","nioCoders@gmail.com"," This is just a simple text message to check db settings!");
//var db =  admin.database();
//var db_ref =  db.ref("https://chatslate-3d35b.firebaseio.com/messages");
});
