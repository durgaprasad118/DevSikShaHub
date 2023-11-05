import Course from '../../Model/Courses.js'
const getCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;  
    const course = await Course.findById({_id:courseId})
    if (!course) {
      return res.status(404).json({ message: 'Course not found' })
    }
    res.status(200).json(course)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}
export default getCourse
