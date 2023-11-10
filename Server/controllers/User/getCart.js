import User from "../../Model/User.js";
import Course from "../../Model/Courses.js";

const cartAdded = async(req,res)=>{
    try {
        const userId = req.User._id;
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        const enrolled = user.Store;
        console.log(enrolled);
        const courses = await Course.find({ _id: { $in:enrolled } });
        res.status(200).json({ courses });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    
}
export default cartAdded