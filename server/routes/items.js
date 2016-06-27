'use strict';

module.exports = function (app) {
  var items = [{
    name:"Ice Cream"
  },{
    name:"Waffles"
  },{
    name:"Candy",
    purchased:true
  },{
    name:"Snarks"
  }];

  app.route('/api/items')
  .get(function(req, res) {
    res.send(items);
  })
  .post(function(req, res) {
    var item = req.body; //Payload
    items.push(item);
  });
}
