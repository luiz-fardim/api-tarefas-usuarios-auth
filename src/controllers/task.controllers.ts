import { createTaskService, updateTaskService, getAllTaskService, getOneTaskService, deleteTaskService } from '../services/task.service.js'
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
        res.status(400).json({ message: (error as Error).message })
    }
}

export const updateTaskController = async (req: Request, res: Response) => {
    const { taskId } = req.params as { taskId: string }
    const { title } = req.body
    try {
        const task = await updateTaskService(taskId, title)
        res.status(200).json({
            message: 'task changed succesfully',
            task: task
        })
    } catch (error) {
        res.status(400).json({ message: (error as Error).message })
    }
}

export const getAllTasksController = async (req: Request, res: Response) => {
    try {
        const task = await getAllTaskService()
        res.status(200).json({
            success: true,
            label: "OK",
            message: "Operation completed successfully",
            data: task,
        })
    } catch (error) {
        res.status(400).json({ message: (error as Error).message })
    }
}

export const getOneTaskController = async (req: Request, res: Response) => {
    const { taskId } = req.params as { taskId: string }
    try {
        const task = await getOneTaskService(taskId)
        res.status(200).json({
            success: true,
            label: "OK",
            message: "Operation completed successfully",
            data: task,
        })
    } catch (error) {
        res.status(400).json({ message: (error as Error).message })
    }
}

export const deleteTaskController = async (req: Request, res: Response) => {
    const { taskId } = req.params as { taskId: string }
    try {
        const task = await deleteTaskService(taskId)
        res.status(200).json({
            success: true,
            label: "OK",
            message: "Operation completed successfully",
            data: task,
        })
    } catch (error) {
        res.status(400).json({ message: (error as Error).message })
    }
}