
import User from '../../Model/User.js'

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) {
      return res.status(400).json({
        message: 'Id required',
      });
    }
    const user = await User.findByIdAndDelete({_id:id});
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    res.status(200).json({
      message:'User deleted Successfully'
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Server Error',
    })
  }
}
export default deleteUser
