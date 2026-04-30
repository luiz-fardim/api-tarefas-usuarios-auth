import prisma from '../lib/prisma.js'

export const createTaskService = async (title: string, userId: string) => {
    if (!title?.trim()) {
        throw new Error('Título é obrigatório')
    }

    const task = await prisma.task.create({
        data: {
            title: title.trim(),
            userId: userId
        }
    })
    return task
}

export const updateTaskService = async (title: string, taskId: string) => {
    if (!title.trim()) {
        throw new Error('Titulo é obrigatório')
    }
    if (!taskId) {
        throw new Error('Identificador é obrigatório para a alteração da tarefa')
    }
    const task = await prisma.task.update({
        where: { id: taskId},
        data: { title: title}
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