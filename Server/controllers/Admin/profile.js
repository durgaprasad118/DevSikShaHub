import Admin from '../../Model/Admin.js'
const adminProfile = async (req, res) => {
  const admin = {
    name: req.Admin.name,
    _id: req.Admin._id,
    email: req.Admin.email,
  }
  res.status(201).json(admin)
}
export default adminProfile
