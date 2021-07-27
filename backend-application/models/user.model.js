const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true, trim: true},
    username: {type: String, required: true, maxlength: 32, trim: true},
    password: {type: String, required: true, minlength: 8, maxlength: 32},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    profileImage: {
        filename: {type: String, unique: true},
        contentType: {type: String},
        imageBase64: {type: String}
    },
    contacts: {
        youtubeChannel: {type: String}
    },
    createdPosts: [{type: Schema.Types.ObjectId, ref: "Posts"}],
    subscribers: [{type: Schema.Types.ObjectId, ref: "User"}],
    subscribing: [ {type: Schema.Types.ObjectId, ref: "User"}],
    likedPosts: [{type: Schema.Types.ObjectId, ref: "Posts"}],
    archive: [{type: Schema.Types.ObjectId, ref: "Posts"}],
    preferableGames: [ {type: Schema.Types.ObjectId, ref: "Games"}],
    createdDate: {type: Schema.Types.Date, auto: true}
})

module.exports = model('User', UserSchema)