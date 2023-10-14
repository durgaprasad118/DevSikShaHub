import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const AdminSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  },
)

const Admin = mongoose.model('Admin', AdminSchema)
export default Admin
