import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
})

const User = mongoose.model('User', AdminSchema)
export default User
