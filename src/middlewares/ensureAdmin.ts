import {Request, Response, NextFunction} from "express";
import {UserRepositories} from "../repositories/UserRepositories";
import {getCustomRepository} from "typeorm";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const {user_id} = request

    const userRepository = getCustomRepository(UserRepositories)

    const {admin} = await userRepository.findOne(user_id)

    if (admin) {
        return next()
    }

    return response.status(401).json({error: 'User Unauthorized'})
}
