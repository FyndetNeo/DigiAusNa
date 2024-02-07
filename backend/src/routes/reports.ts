import express, {Request, Response} from 'express'
import {getReports} from '../../src/functions/reports/getReports'
import {patchReportsStatus} from '../../src/functions/reports/patchReportsStatus'
import {deleteReports} from '../../src/functions/reports/deleteReports'
import {postReports} from '../../src/functions/reports/postReports'
import {patchReports} from '../../src/functions/reports/patchReports'

export const router = express.Router();

router.get('/', function (req: Request, res: Response): void {
    getReports(req.body).then((data: any) => {
        res.status(200).send(data)
    }).catch((err: any) => {
        res.status(500).send(err)
    })
});
router.post('/', function (req: Request, res: Response): void {
    postReports(req.body).then((data: any) => {
        res.status(200).send(data)
    }).catch((err: any) => {
        res.status(500).send(err)
    })
});
router.patch('/', function (req: Request, res: Response): void {
    patchReports(req.body).then((data: any) => {
        res.status(200).send(data)
    }).catch((err: any) => {
        res.status(500).send(err)
    })
});
router.delete('/', function (req: Request, res: Response): void {
    deleteReports(req.body).then((data: any) => {
        res.status(200).send(data)
    }).catch((err: any) => {
        res.status(500).send(err)
    })
});
router.patch('/status', function (req: Request, res: Response): void {
    patchReportsStatus(req.body).then((data: any) => {
        res.status(200).send(data)
    }).catch((err: any) => {
        res.status(500).send(err)
    })
});
