var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
// var i = 1;
var ti = 1;
var tii = 1;
var tiii = 1;
var urlword = [0,1,2,3,4,5];
var oki = 1;

function saveContent($,title){
	var xx = '';
	$('.content-wrap-medium p').each(function(index,item){
		var x = $(this).text() + '\r\n';//因为记事本只支持这样的换行符
		xx += x;
	})
	fs.appendFile('./data/' + title + tiii + '.txt',xx,'utf-8',function(err){
		if(err){
			console.log(err);
		}
	})
	tiii++;
	console.log('ok4444444444444');
}

function saveImg($,name){
	

		
		
			var img_src = $('.pic img').attr('src');
			console.log(img_src);
			request.head(img_src,function(err,res,body){
				if(err){
					console.log(err);
				}
			});

		
			request(img_src).pipe(fs.createWriteStream('./image3/'+ name + oki + '.jpg')).on('finish',function(){
				console.log(oki + '             ' + 'successfully')

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

			if(x == url){
				console.log('okok');
				
					
					var nextLink = $('.mod-txtimg145-list a').first().attr('href');
					// var nextLink = 'http://baidu.com'
					var str = encodeURI(nextLink);
					console.log(str + '      ' + ti);
					startRequest(str);
					ti++;
					
				
			}

			if(x != url){
				console.log('ok33333'+'       '+tii);
				console.log(url);
				console.log(x);
				tii++;
				saveImg($,'ekt');
			}

			// console.log($('.news-overview-item'));

		});
	}).on('error',function(err){
		console.log(err);
	});


}

var len = urlword.length;
var url = '';
for (let i = 0; i < len; i++) {
	// var self = url;
	setTimeout(function(){
		url = 'http://photo.poco.cn/like/index-upi-tpl_type-hot-channel_id-' + urlword[i] + '.html';
		startRequest(url);
	},5000*(i+1));

}










