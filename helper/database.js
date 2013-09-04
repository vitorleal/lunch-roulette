var mongo   = require('mongodb'),
    Server  = mongo.Server,
    Db      = mongo.Db,
    server  = new Server('ds043378.mongolab.com', 43378, { auto_reconnect: true }, { w: 0, native_parser: false });
    db      = new Db('lunch-roulette', server, { safe: true });


module.exports = function (col, callback) {
  db.open(function (err, client) {
    client.authenticate('admin', '1234', function(authErr, success) {
      if (authErr) {
        db.close();
        return console.error(authErr);
      }
      var stream = client.collection(col).find({}).stream(),
          result = [];

      stream.on('data', function (item) {
        result.push(item);
      });
      stream.on('end', function () {
        db.close();

        return callback(result);
      });
    });
  });
}
