var UserModel = require("../models/authentication.model");

_this = this;

exports.getUsers = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var users = await UserModel.paginate(query, options)
        return users;
    } catch (e) {
        throw Error('Error while Paginating Users List')
    }
}

exports.createUser = async function(user){
    var newUser = new UserModel({
        username: user.username,
        loginName: user.loginName,
        password: user.password
    })
    try{
        var savedUser = await newUser.save()/*function(err) {
          if (err) {
            return res.json({success: false, msg: 'Login Name already exists.'});
          }
          return res.json({success: true, msg: 'Successfully created new user.'});
        });*/
        return savedUser;
      }catch(e){
        throw Error('An Error Occured while Creating New USer')
    }
}
