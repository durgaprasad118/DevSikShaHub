import connectDB from './config/connectDB.js'
import courseRouter from './routes/CourseRoutes.js'
import adminRouter from './routes/AdminRoutes.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
connectDB()
const app = express()
app.use(cors())
app.use(express.json()) //parseJSON
app.use(express.urlencoded({ extended: true })) //form data
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Server ready')
})
app.use('/admin', adminRouter)
app.use('/course', courseRouter)
app.listen(port, () => {
  console.log(`app is listening at ${port}`)
})
