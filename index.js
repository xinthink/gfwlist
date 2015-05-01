var express = require('express');
var app = express();
var request = require('request');

var GFW_LIST_URL = 'http://autoproxy-gfwlist.googlecode.com/svn/trunk/gfwlist.txt';


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, resp) {
  request.get(GFW_LIST_URL).pipe(resp);
});

app.get('/gfwlist', function(req, resp) {
  request.get(GFW_LIST_URL).pipe(resp);
});

app.get('/test', function(req, resp) {
  request.get('http://www.zhihu.com/careers').pipe(resp);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on http://localhost:%s', app.get('port'));
});
