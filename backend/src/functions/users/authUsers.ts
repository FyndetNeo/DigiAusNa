import {APPCONFIG} from '../../app'
import jwt from 'jsonwebtoken'
import {USERTOKEN} from '../../interfaces/users/userToken'
import {dbController} from '../../functions/db/dbController'
import {inputValidator} from '../../functions/utils/inputValidator'

export function authUsers(body:any){
    return new Promise((resolve, reject) => {
        if(inputValidator(body.username, 'single') && inputValidator(body.password, 'single')){
            let prompt: string = 'SELECT * FROM User WHERE username = "'+ body.username +'" AND password = "'+ body.password +'"'
            dbController(prompt).then((res:any)=>{
                const userToken: USERTOKEN = {
                    username: res[0].username,
                    password: res[0].password,
                    role: res[0].role
                }
                const token = jwt.sign(userToken, APPCONFIG.JWT, {expiresIn: '12h'})
                resolve(token)
            }).catch((rej:any)=>(
                reject(rej)
            ))
        } else {
            reject('SQL COMMAND DETECTED')
        }
    })
}