import { Request, Response, NextFunction } from 'express'
import { ZodSchema } from 'zod'

export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result: any = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    })

    if (!result.success) {
      return res.status(400).json({
        error: 'Invalited data',
        details: result.error.flatten().fieldErrors,
      })
    }

    req.body = result.data.body ?? req.body
    next()
  }
}