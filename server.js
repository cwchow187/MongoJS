var cheerio = require('cheerio');

var request = require('request');

// First, tell the console what server.js is doing
console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from Fox News:" +
            "\n***********************************\n");

request("https://www.foxnews.com/", function(error, response, html){
	var $ = cheerio.load(html);

	var results = [];


	$("p.title").each(function(i,element){
		var title = $(element).text();
		var link = $(element).children().attr("href");

		results.push({
			title: title,
			link: link
		});
	});
	console.log(results);
});