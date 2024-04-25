var http = require('http');
http.createServer(function (req, res){
  res.write("bot aktif");//İsteğe bağlı değişebilir (değişmemenizi tavsiye ederim)
  res.end();
}).listen(8080);

