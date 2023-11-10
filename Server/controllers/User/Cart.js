import User from "../../Model/User.js";
import Course from "../../Model/Courses.js";
const AddtoCart = async(req,res)=>{
    try {
        const {courseId} = req.params;
        const userId = req.User._id;
        const user = await User.findById(userId);
        const course = await Course.findById(courseId);
        if(!course){
            return res.status(400).json({ message: 'Course not found' }); 
        }
        if(user.Store.includes(courseId)){
            return res.status(400).json({ message: 'User is already enrolled in the course' });
        }
        user.Store.push(courseId);
        await user.save();
       res.status(200).json({
        message:'Course Added to cart!'
       }) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });   
    }
}
export default AddtoCart;