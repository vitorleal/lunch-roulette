var mongo   = require('mongodb'),
    Server  = mongo.Server,
    Db      = mongo.Db,
    server  = new Server('ds043378.mongolab.com', 43378, { auto_reconnect: true }),
    db      = new Db('lunch-roulette', server);

module.exports = function (app) {
  var index = 'index.html';

  //index
  app.get('/', function (req, res) {
    res.sendfile(index);
  });

  //404
  app.get('*', function (req, res) {
    res.sendfile(index);
  });
}
