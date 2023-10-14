import mongoose, { mongo } from 'mongoose'
import Admin from './Admin.js'

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  published: Boolean,
  imageLink: String,
  offer: Number,
  price: Number,
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
  },
})

const Course = mongoose.model('Course', courseSchema)
export default Course
