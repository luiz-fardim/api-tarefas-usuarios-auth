import prisma from '../lib/prisma.js'

export const createTaskService = async (title: string, userId: string) => {
    if (!title?.trim()) {
        throw new Error('Title is required')
    }

    const task = await prisma.task.create({
        data: {
            title: title.trim(),
            userId: userId
        }
    })
    return task
}

export const updateTaskService = async (taskId: string, title: string) => {
    if (!taskId) {
        throw new Error('The identifier is required for change')
    }
    if (!title.trim()) {
        throw new Error('Title is required')
    }
    const task = await prisma.task.update({
        where: { id: taskId },
        data: { title: title }
    })
    return task
}

export const getAllTaskService = async () => {
    const task = await prisma.task.findMany()
    return task
}

export const getOneTaskService = async (taskId: string) => {
    const task = await prisma.task.findUnique({
        where: {
            id: taskId
        },
        select: {
            title: true
        }
    })
    return task
}

export const deleteTaskService = async (taskId: string) => {
    if (!taskId) {
        throw new Error('The identifier is required for deletion')
    }
    const task = await prisma.task.delete({
        where: {
            id: taskId
        }
    })
    return task
}
