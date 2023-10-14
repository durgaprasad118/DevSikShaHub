import Course from '../../Model/Courses.js'

const availableCourses = async (req, res) => {
  try {
    const allCourses = await Course.find({})
    res.status(200).json(allCourses)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Internal Server Error',
    })
  }
}
export default availableCourses
