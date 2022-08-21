const User = require('../models/userModel')
const bcrypt = require('bcrypt')

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body
    const usernameCheck = await User.findOne({ username })
    if (usernameCheck) {
      return res.json({
        message: 'Username already exists',
        status: false,
      })
    }
    const emailCheck = await User.findOne({ email })
    if (emailCheck) {
      return res.json({
        message: 'Email already exists',
        status: false,
      })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    })
    delete user.password
    return res.json({
      message: 'User created successfully',
      status: true,
      user,
    })
  } catch (error) {
    next(error)
  }
}


module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const usernameCheck = await User.findOne({ username })
    if (!usernameCheck) {
      return res.json({
        message: 'Incorrect Username or password',
        status: false,
      })
    }
    const passwordValid = await bcrypt.compare(password, usernameCheck.password)
    if (!passwordValid) {
      return res.json({
        message: 'Incorrect Username or password',
        status: false,
      })
    }
    delete usernameCheck.password
    
    return res.json({
      status: true,
      usernameCheck,
    })
  } catch (error) {
    next(error)
  }
}

module.exports.setAvatar = async (req, res, next) => {
  try {
    const userId = req.params.id
    const avatarImage = req.body.image
    const userData = await User.findByIdAndUpdate(userId, {
      isAvatarImageSet: true,
      avatarImage
    })
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    })

  } catch (error) {
    next(error)
  }
    
  
}