var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var i = 1;
var url = "http://www.ekt-digital.com/stb-devices";

function saveImg($,name){
	$('.content-wrap-xxlarge figure img').each(function(index,item){
		if(i == 6){
			return;
		}
		
		if($(this).attr('src').indexOf('//') == 0){
			var img_src = 'http:' + $(this).attr('src');
			request.head(img_src,function(err,res,body){
				if(err){
					console.log(err);
				}
			});

			var thisi = i;
			request(img_src).pipe(fs.createWriteStream('./image2/'+ name + i + '.png')).on('finish',function(){
			console.log('success' + ' ' + thisi);

			});
		
			i++;
		}

	});
	
}

function startRequest(x){
	http.get(x,function(res){
		var html = '';
		res.on('data',function(chunk){
			html += chunk;
		});
		res.on('end',function(){
			var $ = cheerio.load(html);
			saveImg($,'ekt');
		});
	}).on('error',function(err){
		console.log(err);
	});


}

startRequest(url);









