module.exports = function(app) {
  var index = 'index.html';

  //index
  app.get('/', function(req, res){
    res.sendfile(index);
  });

  //404
  app.get('*', function(req, res){
    res.sendfile(index);
  });
}
