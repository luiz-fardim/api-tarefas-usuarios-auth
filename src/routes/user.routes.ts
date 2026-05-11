import { registerController, loginController, allUsersController, getUserByIdController, removeUserController, updateUserController } from '../controllers/user.controller.js'
import { Router } from 'express'
import { UserRegisterSchema, UserLoginSchema, UserUpdateSchema } from '../schemas/user.schema.js'
import { validate } from '../middlewares/validate.js'

const router = Router()

router.get('/users', allUsersController)
router.get('/users/:id', getUserByIdController)
router.patch('/users/:id', validate(UserUpdateSchema), updateUserController)
router.post('/register', validate(UserRegisterSchema), registerController)
router.post('/login', validate(UserLoginSchema), loginController)
router.delete('/users/:id', removeUserController)

export default router