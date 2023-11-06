import express from 'express'
import { register } from '../controllers/User/Register.js'
import userName from '../controllers/User/username.js'
import { login } from '../controllers/User/login.js'
import userProfile from '../controllers/User/profile.js'
import updateUserProfile from '../controllers/User/updateProfile.js'
import userAuth from '../middleware/UserAuth.js'
import deleteUser from '../controllers/User/deleteUser.js'
import EnrollCourse from '../controllers/User/EnrollCourse.js'
import enrolledCourses from '../controllers/User/getEnrolledCourses.js'
const router = express.Router()
router.post('/register', register)
router.post('/login', login)
router.get('/userName/:_id', userName)
router.get('/profile', userAuth, userProfile)
router.put('/profileUpdate', userAuth, updateUserProfile)
router.delete('/deleteprofile/:id',userAuth,deleteUser)
router.post('/enrollCourse',userAuth,EnrollCourse)
router.get('/enrolledCourses',enrolledCourses)
export default router

