import Course from '../../Model/Courses.js'
 const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const deletedCourse = await Course.findByIdAndDelete(courseId);
    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
export default deleteCourse;