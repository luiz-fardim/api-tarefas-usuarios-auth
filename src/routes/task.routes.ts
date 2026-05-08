import { createTaskController, updateTasksController, getAllTasksController, getOneTaskController, deleteTaskController } from "../controllers/task.controllers.js";
import { authMiddleware } from "../middlewares/user.auth.middleware.js";
import { Router } from 'express'

const router = Router()

router.get('/tasks', authMiddleware, getAllTasksController)
router.get('/getOneTask/:taskId', authMiddleware, getOneTaskController)
router.post('/registerTask', authMiddleware, createTaskController)
router.put('/updateTask/:taskId', authMiddleware, updateTasksController)
router.delete('/deleteTask/:taskId', authMiddleware, deleteTaskController)

export default router