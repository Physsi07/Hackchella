
define(function (require) {
var cheerio  = require('cheerio'),
  $ =  cheerio.load('.public/index.html'),
  fs =  require('fs');


 //now lets read the html and apply button actions for inputs

 fs.readFile('./public/index.html' , function(err,html)
 {
 	if(err){
 		throw err;
 	}else{
 		$ =  cheerio.load(html.toString());
 		 
          


 	}
 })
}); //

