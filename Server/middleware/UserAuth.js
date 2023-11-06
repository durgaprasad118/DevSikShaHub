
import jwt from 'jsonwebtoken'
import User from '../Model/User.js'
const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  try {
    const token = authHeader.split(' ')[1]
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    req.User = await User.findById(decodedToken.userId)
    next()
  } catch (error) {
    res.status(401).json({
      error: 'Un authorized',
    })
  }
}
export default userAuth
