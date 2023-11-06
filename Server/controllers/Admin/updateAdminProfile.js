import Admin from '../../Model/Admin.js'
import bcrypt from 'bcrypt'
const updateAdminProfile = async (req, res) => {
  const { name, password } = req.body
  
  const id = req.Admin._id
  const checkPasswordStrength = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
  )
  try {
    const admin = await Admin.findById(id)
    if (admin) {
      if (name) {
        if (name.length < 3) {
          return res.status(400).json({
            message: 'Min length of name should be greater than 3',
          })
        }
        admin.name = name || admin.name
      }
      if (password) {
        if (!checkPasswordStrength.test(password)) {
          return res.status(400).json({
            message: 'Please choose a strong password',
          })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        admin.password = hashedPassword
      }
    }
    await admin.save()
    res.status(200).json({
      message: 'Profile updated Successfully',
      admin: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
    })
  }
}

export default updateAdminProfile
