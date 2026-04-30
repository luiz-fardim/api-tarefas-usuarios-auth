import { registerController, loginController, allUsersController, getUserByIdController, removeUserController, updateUserController } from '../controllers/user.controller.js'
import { Router } from 'express'

const router = Router()

router.get('/users', allUsersController)
router.get('/users/:id', getUserByIdController)
router.patch('/users/:id', updateUserController)
router.post('/register', registerController)
router.post('/login', loginController)
router.delete('/users/:id', removeUserController)

export default router