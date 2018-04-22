

var cheerio  = require('cheerio'),
  $ =  cheerio.load('.deploy/index.html'),
  fs =  require('fs');


 //now lets read the html and apply button actions for inputs

 fs.readFile('./deploy/index.html' , function(err,html)
 {
 	if(err){
 		throw err;
 	}else{
 		$ =  cheerio.load(html.toString());
 		 
          


 	}
 })