import bcrypt from 'bcrypt'
import validator from 'validator'
import Admin from '../../Model/Admin.js'
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
    const adminExists = await Admin.findOne({ email })
    if (adminExists) {
      return res.status(409).json({
        message: 'User already exists. Please login.',
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    })

    const token = generateToken(res, newAdmin._id) 
    res.status(201).json({
      message: 'Admin Registration Successful',
      token,
      admin: {
        id: newAdmin._id,
        name: newAdmin.name,
        email: newAdmin.email,
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
