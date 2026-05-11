import { z } from 'zod';

export const UserRegisterSchema = z.object({
    body: z.object({
        name: z.string().min(1, 'Name is required'),
        email: z.string().email('Invalid email address'),
        password: z.string().min(6, 'Password must be at least 6 characters long'),
    }),
});

export const UserLoginSchema = z.object({
    body: z.object({
        email: z.string().email('Invalid email address'),
        password: z.string().min(6, 'Password must be at least 6 characters long'),
    }),
});

export const UserUpdateSchema = z.object({
    body: z.object({
        email: z.string().email('Invalid email address').optional(),
        password: z.string().min(6, 'Password must be at least 6 characters long').optional(),
    }),
    param: z.object({
        id: z.string().uuid('Invalid user ID'),
    }),
});
