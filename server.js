var express = require('express')
var app = express()

var http = require('http').Server(app);
var io = req('socket.io')(http);
 
var PORT = 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){
  console.log('a user connected');
});
 
http.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
