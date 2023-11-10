import User from '../../Model/User.js'
import Course from '../../Model/Courses.js'
const EnrollCourse = async (req, res) => {
  try {
    const userId = req.User._id
    const user = await User.findById(userId)
    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }
    const CartItems = user.Store
    CartItems.forEach((id) => {
      if (!user.Enrolledcourses.includes(id)) {
        user.Enrolledcourses.push(id)
      }
    })
    await user.save()
    res.json({ enrolledCourses: user.Enrolledcourses, message: 'Courses enrolled successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
export default EnrollCourse
