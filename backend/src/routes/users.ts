import express, {Request, Response} from 'express'
import {getUsers} from '../../src/functions/users/getUsers'
import {postUsers} from '../../src/functions/users/postUsers'
import {patchUsers} from '../../src/functions/users/patchUsers'
import {deleteUsers} from '../../src/functions/users/deleteUsers'
import {authUsers} from '../../src/functions/users/authUsers'


export const router = express.Router();


router.get('/', function(req: Request, res: Response) {
    getUsers(req.body).then((data: any) => {
        res.status(200).send(data)
    }).catch((err: any) => {
        res.status(500).send(err)
    })
});
router.post('/', function(req: Request, res: Response) {
    postUsers(req.body).then((data: any) => {
        res.status(200).send(data)
    }).catch((err: any) => {
        res.status(500).send(err)
    })
});
router.patch('/', function(req: Request, res: Response) {
    patchUsers(req.body).then((data: any) => {
        res.status(200).send(data)
    }).catch((err: any) => {
        res.status(500).send(err)
    })
});
router.delete('/', function(req: Request, res: Response) {
    deleteUsers(req.body).then((data: any) => {
        res.status(200).send(data)
    }).catch((err: any) => {
        res.status(500).send(err)
    })
});
router.post('/auth', function (req: Request, res:Response){
    authUsers(req.body).then((data: any) => {
        res.status(200).send(data)
    }).catch((err: any) => {
        res.status(500).send(err)
    })
})