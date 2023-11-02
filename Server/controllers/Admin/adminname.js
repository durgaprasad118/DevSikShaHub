import Admin from '../../Model/Admin.js'
const adminName = async (req, res) => {
  const id = req.params._id
  if (!id) {
    return res.status(400).json({
      message: 'Id required',
    })
  }
  const admin = await Admin.findById(id)
  res.status(200).json({
    adminName: admin.name,
  })
}
export default adminName
