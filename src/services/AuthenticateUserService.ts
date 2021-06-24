import {getCustomRepository} from "typeorm";
import {UserRepositories} from "../repositories/UserRepositories";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";

interface IAuthenticateResquest {
    email: string
    password: string
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateResquest) {
        const usersResponsitory = getCustomRepository(UserRepositories)

        const user = await usersResponsitory.findOne({email})

        if (!user) {
            throw new Error('Email/Password Incorrect')
        }

        const passwordMath = await compare(password, user.password)

        if (!passwordMath) {
            throw new Error('Email/Password Incorrect')
        }
        const token = await sign({email: user.email}, '6fa18a0ac995377c6582912a7524018c', {
            subject: user.id,
            expiresIn: '1d'
        })

        return token

    }

}

export {AuthenticateUserService}
