const User = require('../models/user.model');

exports.newUser = async (value) => {
  await new User({ name: value }).save();
};

exports.getUserName = async (value) => User.find({ name: new RegExp(value, 'i') }).select('-_id -__v');
