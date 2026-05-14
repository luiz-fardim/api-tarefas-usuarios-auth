import { z } from 'zod'

export const TaskRegisterSchema = z.object({
    body: z.object({
        title: z.string("The title must be a string").min(1),
        userId: z.string().uuid("Invalid UUID")
    })
})

export const TaskUpdateSchema = z.object({
    body: z.object({
        taskId: z.string().uuid("Invalid UUID"),
        title: z.string("The title must be a string").min(1)
    })
})      