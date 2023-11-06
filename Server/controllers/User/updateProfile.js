
import User from '../../Model/User.js'
import bcrypt from 'bcrypt'
const updateUserProfile = async (req, res) => {
  const { name, password } = req.body
  const id = req.User._id
  const checkPasswordStrength = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
  )
  try {
    const user = await User.findById(id)
    if (user) {
      if (name) {
        if (name.length < 3) {
          return res.status(400).json({
            message: 'Min length of name should be greater than 3',
          })
        }
        user.name = name || user.name
      }
      if (password) {
        if (!checkPasswordStrength.test(password)) {
          return res.status(400).json({
            message: 'Please choose a strong password',
          })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        user.password = hashedPassword
      }
    }
    await user.save()
    res.status(200).json({
      message: 'Profile updated Successfully',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
    })
  }
}

export default updateUserProfile
