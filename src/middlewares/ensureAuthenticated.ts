import {Request, Response, NextFunction} from 'express'
import {verify} from "jsonwebtoken";

interface IPayload {
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const token = request.headers.authorization

    if (!token) {
        return response.status(401).json({message: 'Token Não encontrado'})
    }

    try {
        const {sub} = verify(token.replace('Bearer ', ''), '6fa18a0ac995377c6582912a7524018c') as IPayload

        request.user_id = sub

        return next()
    } catch (err) {
        console.log(err)
        return response.status(401).end()
    }
}
