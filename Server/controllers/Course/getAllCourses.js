import Course from '../../Model/Courses.js'

const getAllCourses = async (req, res) => {
  try {
    const adminId = req.Admin._id
    const courses = await Course.find({ admin: adminId })
    res.status(201).json({
      courses,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Server Error',
    })
  }
}
export default getAllCourses
