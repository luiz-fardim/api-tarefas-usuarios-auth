import prisma from '../lib/prisma.js'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
export const registerUser = async (name: string, email: string, password: string) => {
    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (existingUser) {
        throw new Error('User already exists')
    }

    const criptedPassword = await bcrypt.hash(password, 10)
    const { password: _, ...user } = await prisma.user.create({
        data: {
            name,
            email,
            password: criptedPassword
        }
    })
    return user
}

export const loginUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (!user) {
        throw new Error('Invalid credentials')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        throw new Error('Invalid credentials')
    }

    const token = jsonwebtoken.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' })
    return token

}

export const listAllUsers = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true
        }
    })
    return users
}

export const listOneUser = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true
        }
    })

    if (!user) {
        throw new Error('User not found')
    }

    return user
}

console.log('auth ativa')
