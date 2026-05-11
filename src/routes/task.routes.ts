import { createTaskController, updateTasksController, getAllTasksController, getOneTaskController, deleteTaskController } from "../controllers/task.controllers.js";
import { authMiddleware } from "../middlewares/user.auth.middleware.js";
import { Router } from 'express'

const router = Router()

router.get('/tasks', authMiddleware, getAllTasksController)
router.get('/tasks/:taskId', authMiddleware, getOneTaskController)
router.post('/tasks', authMiddleware, createTaskController)
router.put('/tasks/:taskId', authMiddleware, updateTasksController)
router.delete('/tasks/:taskId', authMiddleware, deleteTaskController)

export default router