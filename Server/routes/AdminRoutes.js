import express from 'express'
import { register } from '../controllers/Admin/Register.js'
import { login } from '../controllers/Admin/login.js'
import { logOutAdmin } from '../controllers/Admin/Logout.js'
import adminProfile from '../controllers/Admin/profile.js'
import adminAuth from '../middleware/AdminAuth.js'
import updateAdminProfile from '../controllers/Admin/updateAdminProfile.js'

const router = express.Router()
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logOutAdmin)
router.get('/profile', adminAuth, adminProfile)
router.put('/profileUpdate', adminAuth, updateAdminProfile)
export default router
