const {Schema, model} = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  twitts: [{
    type: Schema.Types.ObjectId,
    ref: 'Twitt',
  }],
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImage: {
    type: String,
    default:
      'https://www.shareicon.net/data/512x512/2016/08/01/822711_user_512x512.png',
  },
  data: {
    type: Date,
    default: Date.now,
  },
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.password
  }
})

module.exports = model('Users', userSchema)
