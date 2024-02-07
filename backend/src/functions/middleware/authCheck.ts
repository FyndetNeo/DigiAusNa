import jwt from 'jsonwebtoken'
import {Request, Response, NextFunction} from 'express'
import dotenv from 'dotenv'
import {APPCONFIG} from '../../app'
dotenv.config({ path: './.env' })


export function authorizationCheck(req: Request, res: Response, next: NextFunction) {
    if (req.path === '/users/auth') return next()
    const token = req.header('Auth')

    if (!token) {
        return res.status(401).send({ message: 'Unauthorized' })
    }
    try {
        const decoded = jwt.verify(token, APPCONFIG.JWT)
        next()
    } catch (error) {
        return res.status(401).send({ message: 'Error in Auth, relog' })
    }
}

