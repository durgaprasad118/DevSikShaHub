import express from 'express'
import { register } from '../controllers/User/Register.js'
import userName from '../controllers/User/username.js'
import { login } from '../controllers/User/login.js'
import userProfile from '../controllers/User/profile.js'
import updateUserProfile from '../controllers/User/updateProfile.js'
import userAuth from '../middleware/UserAuth.js'
import deleteUser from '../controllers/User/deleteUser.js'
const router = express.Router()
router.post('/register', register)
router.post('/login', login)
router.get('/userName/:_id', userName)
router.get('/profile', userAuth, userProfile)
router.put('/profileUpdate', userAuth, updateUserProfile)
router.delete('/deleteprofile/:id',userAuth,deleteUser)
export default router

