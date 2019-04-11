const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    username: {
        type: String,
        required: true},
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true},
    password: {
        type: String,
        required: true}   
}, {
    timestamps: true
});


userSchema.pre('save', function(next) {
    const user = this;
    
    // if the password data  in the user model hasn't been  modified, return next
    if (!user.isModified('password')) return next();
    // when t he password has been changed, SALT and HASH it
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password;
        return ret;
    }
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('User', userSchema);