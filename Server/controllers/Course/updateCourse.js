import Course from '../../Model/Courses.js'

export const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId
    const { title, imageLink, description, offer, price } = req.body
    const course = await Course.findById(courseId)
    const published = req.body.hasOwnProperty('published')
      ? req.body.published
      : course.published
    if (!course) {
      return res.status(404).json({ message: 'Course not found' })
    }
    const updateFields = {}
    updateFields.title = title || course.title
    updateFields.imageLink = imageLink || course.imageLink
    updateFields.description = description || course.description
    updateFields.published = published
    updateFields.offer = offer || course.offer
    updateFields.price = price || course.price
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      updateFields,
      { new: true },
    )
    res
      .status(200)
      .json({ message: 'Course updated successfully', updatedCourse })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}
export default updateCourse
