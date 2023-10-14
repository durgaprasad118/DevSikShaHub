import express from 'express'
const router = express.Router()
import adminAuth from '../middleware/AdminAuth.js'
import createCourse from '../controllers/Course/createCourse.js'
import getAllCourses from '../controllers/Course/getAllCourses.js'
import deleteCourse from '../controllers/Course/deleteCourse.js'
import getCourse from '../controllers/Course/getCourse.js'
import updateCourse from '../controllers/Course/updateCourse.js'
import availableCourses from '../controllers/Course/AvailableCourse.js'

router.post('/createCourse', adminAuth, createCourse)
router.get('/allCourses', adminAuth, getAllCourses)
router.delete('/deleteCourse/:courseId', adminAuth, deleteCourse)
router.get('/getCourse/:courseId', adminAuth, getCourse)
router.put('/updateCourse/:courseId', adminAuth, updateCourse)
router.get('/available', availableCourses)
export default router
