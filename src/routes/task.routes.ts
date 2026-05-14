import { createTaskController, updateTaskController, getAllTasksController, getOneTaskController, deleteTaskController } from "../controllers/task.controllers.js";
import { authMiddleware } from "../middlewares/user.auth.middleware.js";
import { TaskRegisterSchema, TaskUpdateSchema } from "../schemas/task.schema.js";
import { validate } from "../middlewares/validate.js";
import { Router } from 'express'

const router = Router()

router.get('/tasks', authMiddleware, getAllTasksController)
router.get('/tasks/:taskId', authMiddleware, getOneTaskController)
router.post('/tasks', validate(TaskRegisterSchema), authMiddleware, createTaskController)
router.put('/tasks/:taskId', validate(TaskUpdateSchema), authMiddleware, updateTaskController)
router.delete('/tasks/:taskId', authMiddleware, deleteTaskController)

export default router   