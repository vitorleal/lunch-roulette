var express = require("express"),
    http    = require("http"),
    path    = require("path"),
    app     = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.static(__dirname + '/public'));
  app.use(express.favicon(__dirname + '/public/img/favicon.png'));
});


var routes = require("./routes/routes.js")(app);

// Create the server
http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port %s", app.get('port'));
});
