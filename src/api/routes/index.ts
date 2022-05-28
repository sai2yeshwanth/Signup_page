import { Router } from 'express'
import userRouter from './User'

const routes = Router()

routes.use('/user', userRouter)

export default routes