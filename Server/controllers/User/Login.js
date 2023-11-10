import bcrypt from 'bcrypt'
import validator from 'validator'
import User from '../../Model/User.js'
import genrateToken from '../../utils/generateToken.js'
const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      message: 'All fields are mandatory!',
    })
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      message: 'Invalid Email',
    })
  }
  try {
    const existingUser = await User.findOne({ email })
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' })
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password)

    if (!matchPassword) {
      return res.status(401).json({
        message: 'Invalid Password',
      })
    }

    const token = genrateToken(res, existingUser._id)

    res.status(201).json({
      token: token,
      message: 'User Login successfull',
      User: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        error: error.message,
      })
    }
    return res.status(500).json({
      message: 'Internal Server Error',
    })
  }
}

export { login }
