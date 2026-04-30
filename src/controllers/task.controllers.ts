import { createTaskService, updateTaskService, getAllTaskService, getOneTaskService } from '../services/task.service.js'
import { Request, Response } from 'express'

export const createTaskController = async (req: Request, res: Response) => {
    const { title, userId } = req.body
    try {
        const task = await createTaskService(title, userId)
        res.status(201).json({ 
            message: 'task registered successfully',
            task: task
        })
    } catch (error) {
        res.status(400).json({ message: (error as Error).message})
    }
}

export const updateTasksController = async (req: Request, res: Response) => {
    const { taskId } = req.params 
    try {
        
    } catch (error) {

    }
}

export const getAllTasksController = async (req: Request, res: Response) => {
    try {
        const task = await getAllTaskService()
        res.status(200).json({
            sucesse: true,
            label: "OK",
            message: "Operation completed successfully",
            data: task,
        })
    } catch (error) {
        res.status(400).json({ message: (error as Error).message})
    }
}