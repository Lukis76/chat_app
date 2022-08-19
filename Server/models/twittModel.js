// const {Schema, model} = require('mongoose')

// const twittSchema = new Schema({
//   twitt: {
//     type: String,
//     date: Date,
//     user: {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//     }
//   },
// })

// twittSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })

// module.exports = model('Users', userSchema)