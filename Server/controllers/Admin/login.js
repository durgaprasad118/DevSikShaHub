import bcrypt from 'bcrypt'
import validator from 'validator'
import Admin from '../../Model/Admin.js'
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
    const existingAdmin = await Admin.findOne({ email })
    if (!existingAdmin) {
      return res.status(404).json({ message: 'User not found' })
    }

    const matchPassword = await bcrypt.compare(password, existingAdmin.password)

    if (!matchPassword) {
      return res.status(401).json({
        message: 'Invalid Password',
      })
    }

    const token = genrateToken(res, existingAdmin._id)

    res.status(201).json({
      token: token,
      message: 'Admin Login successfull',
      Admin: {
        id: existingAdmin._id,
        name: existingAdmin.name,
        email: existingAdmin.email,
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
