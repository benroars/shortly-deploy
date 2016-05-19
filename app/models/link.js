var mongodb = require('mongodb');
var mongoose = require('mongoose');
var util = require('../../lib/utility');

var Schema = mongoose.Schema;

var urls = new Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number
});

var Link = mongoose.model('Link', urls);

urls.pre('save', function(next){
	//console.log('suh');
	this.code = util.createHash(this.url);
	next();
})

module.exports = Link;

// var db = require('../config');
// var crypto = require('crypto');

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

// module.exports = Link;
