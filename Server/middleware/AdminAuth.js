import jwt from 'jsonwebtoken'
import Admin from '../Model/Admin.js'
const adminAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  try {
    const token = authHeader.split(' ')[1]
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    req.Admin = await Admin.findById(decodedToken.userId)
    next()
  } catch (error) {
    res.status(401).json({
      error: 'Un authorized',
    })
  }
}
export default adminAuth
