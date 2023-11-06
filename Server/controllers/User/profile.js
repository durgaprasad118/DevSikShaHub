import User from '../../Model/User.js'
const userProfile = async (req, res) => {
  const user = {
    name: req.User.name,
    _id: req.User._id,
    email: req.User.email,
  }
  res.status(201).json(user)
}
export default userProfile

