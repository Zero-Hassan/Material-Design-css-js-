var express = require('express');
var app = express();
app.use('/', express.static(__dirname));
app.listen(8181, function() { console.log('listening'); });