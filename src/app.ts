import express from 'express'
import cors from 'cors'
import authRoutes from './routes/user.routes.js'

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))
app.use('/', authRoutes)

export default app

console.log('app conectado')