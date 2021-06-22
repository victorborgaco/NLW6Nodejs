import {Request, Response} from 'express'
import {CreateUserService} from '../services/CreateUserService'

class CreateUserController {
    async handle(resquest: Request, response: Response) {
        const {name, email, admin} = resquest.body

        const createUserService = new CreateUserService()
        const user = await createUserService.execute({name, email, admin})

        return response.json(user)
    }

}

export {CreateUserController}
