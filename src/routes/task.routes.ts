import { createTaskController, getAllTasksController } from "../controllers/task.controllers.js";
import { Router } from 'express'

const router = Router()

router.get('/tasks', getAllTasksController)
router.post('/registerTask', createTaskController)

export default router