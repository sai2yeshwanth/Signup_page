import { Router, Request,Response } from 'express'
import * as userController from '../controllers/userControllers'
import {CreateUserDTO,UpdateUserDTO,FilterUserDTO} from '../dto/user.dto'


const userRouter = Router()

// get all user
userRouter.get('/', async (req: Request, res: Response) => {
  const filters:FilterUserDTO = req.query
  const results = await userController.getAll(filters)
  return res.status(200).send(results)
})

//get all user by id
userRouter.get('/:id',async (req:Request, res: Response) => {
  const id = Number(req.params.id)
    const result = await userController.getById(id)
    return res.status(200).send(result)
})

//create new user
userRouter.post('/', async (req: Request, res: Response) => {
  const payload:CreateUserDTO = req.body
  const result = await userController.create(payload)
  return res.status(200).send(result)
})


//update user
userRouter.put('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const payload:UpdateUserDTO = req.body

  const result = await userController.update(id, payload)
  return res.status(201).send(result)
})


//delete user by id
userRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const result = await userController.deleteById(id)
  return res.status(204).send({
      success: result
  })
})


export default userRouter
