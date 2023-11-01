import Course from '../../Model/Courses.js'

const createCourse = async (req, res) => {
  const { title, imageLink, description, published, offer, price } = req.body
  const admin = req.Admin._id
  try {
    const newCourse = await Course.create({
      title,
      imageLink,
      description,
      offer,
      price,
      published,
      admin,
    })
    res.status(200).json({
      message: 'Course Created Successfully',
      course: newCourse,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server Error' })
  }
}
export default createCourse
