import express from 'express'
import { logOutAdmin } from '../controllers/Admin/Logout.js'
import { register } from '../controllers/Admin/Register.js'
import adminName from '../controllers/Admin/adminname.js'
import { login } from '../controllers/Admin/login.js'
import adminProfile from '../controllers/Admin/profile.js'
import updateAdminProfile from '../controllers/Admin/updateAdminProfile.js'
import adminAuth from '../middleware/AdminAuth.js'
import deleteAdmin from '../controllers/Admin/deleteAdmin.js'
const router = express.Router()
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logOutAdmin)
router.get('/adminName/:_id', adminName)
router.get('/profile', adminAuth, adminProfile)
router.put('/profileUpdate', adminAuth, updateAdminProfile)
router.delete('/deleteprofile/:id',adminAuth,deleteAdmin)
export default router
