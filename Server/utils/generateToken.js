import jwt from 'jsonwebtoken'
const genrateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })
  return token
}
export default genrateToken
