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
      ref: 'Course', 
    }],
    Store:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
      }
    ]
  },
  {
    timestamps: true,
  },
)

const User = mongoose.model('User', UserSchema)
export default User
