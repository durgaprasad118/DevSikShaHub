import bcrypt from 'bcrypt'
import validator from 'validator'
import User from '../../Model/User.js'
import generateToken from '../../utils/generateToken.js'

const register = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'All fields are mandatory!',
    })
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({
      message: 'Invalid Email',
    })
  }

  const checkPasswordStrength = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
  )

  if (!checkPasswordStrength.test(password)) {
    return res.status(400).json({
      message: 'Please choose a strong password',
    })
  }
  try {
    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(409).json({
        message: 'User already exists. Please login.',
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    })

    const token = generateToken(res, newUser._id) 
    res.status(201).json({
      message: 'User Registration Successful',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
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

export { register }

