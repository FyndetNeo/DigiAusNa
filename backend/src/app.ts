import {Config} from '../src/functions/config/appconfig'
export const APPCONFIG: Config = new Config()
//IMPORT NPMS
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import express from 'express'
import http from "http";
import cors from 'cors'

//IMPORT ROUTES
import {router as indexRouter} from './routes/index'
import {router as usersRouter} from './routes/users'
import {router as reportsRouter} from './routes/reports'
import {initDB} from './functions/db/initDB'

//EXPORT
export const app = express();


process.env.PORT = '3000'

const corsOptions = {
    origin: 'https://digi-ausbildungsnachweis.vercel.app',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/reports', reportsRouter)

const port = normalizePort(process.env.PORT);
app.set('port', port);
const server = http.createServer(app);

initDB().then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})

server.listen(port,  () => {
    console.log('Server running on ' + 'http://localhost:' + port + '/')
})

server.on('error', onError);

function normalizePort(val: any) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
