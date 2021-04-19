const Mongoose = require('mongoose');

module.exports = Mongoose.model('Product', new Mongoose.Schema({
  name: { type: String, required: true },
}, {
  toJSON: {
    getters: true,
    virtuals: false,
  },
}));
