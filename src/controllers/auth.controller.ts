import { registerUser, loginUser, listAllUsers, listOneUser } from '../services/auth.service.js'
import { Request, Response } from 'express'

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    try {
        await registerUser(name, email, password)
        res.status(201).json({ message: 'User registered successfully' })
    } catch (error) {
        res.status(400).json({ message: (error as Error).message })
    }
}
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
        const token = await loginUser(email, password)
        res.json({ token })
    } catch (error) {
        res.status(401).json({ message: (error as Error).message })
    }
}

export const allUsers = async (req: Request, res: Response) => {
    try {
        const users = await listAllUsers()
        res.json({ ok: true, data: users})
    } catch (error) {
        res.status(500).json({ message: (error as Error).message })
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string }

    try {
        const user = await listOneUser(id)
        res.json(user)
    } catch (error) {
        res.status(404).json({ message: (error as Error).message })
    }
}

console.log('controller ligado')