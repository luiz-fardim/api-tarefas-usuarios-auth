import { registerUser, loginUser, listAllUsers, listOneUser, deleteUser, updateUser } from '../services/user.service.js'
import { Request, Response } from 'express'

export const registerController = async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    try {
        await registerUser(name, email, password)
        res.status(201).json({ message: 'User registered successfully' })
    } catch (error) {
        res.status(400).json({ message: (error as Error).message })
    }
}
export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
        const token = await loginUser(email, password)
        res.json({ token })
    } catch (error) {
        res.status(401).json({ message: (error as Error).message })
    }
}

export const allUsersController = async (req: Request, res: Response) => {
    try {
        const users = await listAllUsers()
        res.json({
            success: true,
            label: "OK",
            message: "Operation completed successfully",
            data: users,
        })
    } catch (error) {
        res.status(500).json({ message: (error as Error).message })
    }
}

export const getUserByIdController = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string }

    try {
        const user = await listOneUser(id)
        res.json(user)
    } catch (error) {
        res.status(404).json({ message: (error as Error).message })
    }
}

export const removeUserController = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string }

    try {
        const user = await deleteUser(id)
        res.json({ message: "user successfully deleted" })
    } catch (error) {
        res.status(404).json({ message: (error as Error).message })
    }
}

export const updateUserController = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string }
    const { email, password } = req.body as Partial<{ email: string; password: string}>

    try {
        const updatedUser = await updateUser(id, { email, password })
        res.json({ 
            success: true,
            message: "User updated successfully",
            data: updatedUser 
        })
    } catch (error) {
        res.status(400).json({ message: (error as Error).message })
    }
}

console.log('controller ligado')