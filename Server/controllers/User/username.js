import User from '../../Model/User.js'

const userName = async (req, res) => {
  try {
    const id = req.params._id;
    if (!id) {
      return res.status(400).json({
        message: 'Id required',
      });
    }

    const user = await User.findById({_id:id});

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    res.status(200).json({
      userName: user.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Server Error',
    });
  }
};
export default userName