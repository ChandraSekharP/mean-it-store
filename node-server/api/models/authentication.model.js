var mongoose = require( 'mongoose' );
var mongoosePaginate = require('mongoose-paginate')
/* var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken'); */
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  loginName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

/* UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('userPassword.password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.userPassword.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.userPassword.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.userPassword.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
}; */

UserSchema.plugin(mongoosePaginate)
const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel;

//module.exports = mongoose.model('User', UserSchema);

//mongoose.model('AuthenticationModel', AuthenticationSchema);

//const AuthenticationModel = mongoose.model('AuthenticationSchema', AuthenticationSchema)

//module.exports = AuthenticationModel;
