import User from "../../Model/User.js";
const EmptyCart = async(req,res)=>{
    try {
        const userId = req.User._id;
        const user = await User.findById(userId);
       user.Store=[];
        await user.save();
       res.status(200).json({
        message:'Cart Empty! '
       }) 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });   
    }
}
export default EmptyCart;