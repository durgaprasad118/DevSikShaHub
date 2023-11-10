import Course from '../../Model/Courses.js'
import User from '../../Model/User.js';
 const deleteCourse = async (req, res) => {
  try {
    const userId = req.User._id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const courseId = req.params.courseId;
    const courseIndex = user.Store.indexOf(courseId);
    if(courseIndex==-1){
        return res.status(404).json({ message: 'User is not enrolled in the course' });
    }
    user.Store.splice(courseIndex, 1);
    await user.save();
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
export default deleteCourse;