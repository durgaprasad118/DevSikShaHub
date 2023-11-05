import Admin from '../../Model/Admin.js'

const deleteAdmin = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) {
      return res.status(400).json({
        message: 'Id required',
      });
    }
    const admin = await Admin.findByIdAndDelete({_id:id});
    if (!admin) {
      return res.status(404).json({
        message: 'Admin not found',
      });
    }
    res.status(200).json({
      message:'Admin deleted Successfully'
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Server Error',
    })
  }
}
export default deleteAdmin
