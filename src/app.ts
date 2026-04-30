import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user.routes.js'
import taskRoutes from './routes/task.routes.js'

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))
app.use('/', userRoutes)
app.use('/', taskRoutes)

export default app

console.log('app conectado')