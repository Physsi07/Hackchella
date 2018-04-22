//author luis manon

//=========================================BOT OBJECT ==========================//

var builder  =  require("botbuilder");

var connector  = new builder.ConsoleConnector().listen();
//builder.ConsoleConnector().send("hello world!");
var bot =  new builder.UniversalBot(connector, function(session)
{
	if(session.message.text!=null)
		{
			  session.send("hey we just receive this text from : black user "+session.message.text+" at 10:33am");
              //session.send("You said : %s",session.message.text);
		}
    
});
