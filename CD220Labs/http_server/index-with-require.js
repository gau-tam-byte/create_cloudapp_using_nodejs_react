const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);
  var dateval = today.getDate();
  var greet= "its still not morning"
  if(dateval.getHours()> 6 && dateval.getHours()<12 ){
      greet="Good Morning!"
  }else if(dateval.getHours()>12 && dateval.getHours()<18){
      greet="Good AfterNoon!"
  }else if(dateval.getHours()>=18 && dateval.getHours()<21){
      greet="Good Evening!"
  }else if(dateval.getHours()>=21 && dateval.getHours<24){
      greet="Good Night!"
  }
  res.end(`Hello, World! Todays date and time ! ${today.getDate()} ${greet}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);