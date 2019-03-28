import mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require('mongoose-mongodb-errors')
import validator from 'validator';

const userSchema = new Schema({
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Invalid Email Address"],
      required: 'Please supply an Email Address'
    },
    name: {
      type: String,
      minlength: [3, 'Username must be at least 3 characters.'],
      maxlength: [25, 'Username must be less than 10 characters.'],      
      required: 'Please supply a name',
      trim: true
    },
    password: {
      type: String,
      required: 'Password is required'
    }
});
userSchema.plugin(mongodbErrorHandler);

module.exports = userSchema;