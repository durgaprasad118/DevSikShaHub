import User from '../../Model/User.js'
import Course from '../../Model/Courses.js'
const particularCourse = async (req, res) => {
  try {
    const userId = req.User._id
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    const courseId = req.params.courseId
    const courseIndex = user.Enrolledcourses.indexOf(courseId)
    if (courseIndex == -1) {
      return res.status(404).json({ message: 'Course found' })
    }
    const course = await Course.findById({ _id: courseId })
    if (!course) {
      return res.status(404).json({ message: 'Course not found' })
    }
    res.status(200).json(course)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}
export default particularCourse
