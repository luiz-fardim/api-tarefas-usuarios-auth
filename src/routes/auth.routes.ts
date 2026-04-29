import { register, login, allUsers, getUserById } from '../controllers/auth.controller.js'
import { Router } from 'express'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.get('/users', allUsers)
router.get('/users/:id', getUserById)

console.log('rotas funcionando')


export default router