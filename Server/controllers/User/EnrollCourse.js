import User from "../../Model/User.js";
import Course from "../../Model/Courses.js";
const EnrollCourse = async(req,res)=>{
    try {
        const {courseId}= req.body;
        const userId = req.User._id;
        const user = await User.findById(userId);
        const course = await Course.findById(courseId);
        if(!course){
            return res.status(400).json({ message: 'Course not found' }); 
        }
        if(user.Enrolledcourses.includes(courseId)){
            return res.status(400).json({ message: 'User is already enrolled in the course' });
        }
        user.Enrolledcourses.push(courseId);
        await user.save();
        res.status(200).json({
            message:'Course Added Successfully'
        })
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
}
export default EnrollCourse;