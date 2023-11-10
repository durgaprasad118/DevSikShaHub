import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to DB')
  } catch (error) {
    console.log(`Error :${error.message}`)
    console.log('DB connection falied')
    process.exit(1) 
  }
}

export default connectDB
