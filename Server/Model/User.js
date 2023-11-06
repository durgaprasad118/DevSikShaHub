import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minLength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    Enrolledcourses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course', // You can replace 'Course' with the actual model name for courses
    }],
  },
  {
    timestamps: true,
  },
)

const User = mongoose.model('User', UserSchema)
export default User
