import {dbController} from './dbController'

const prompt: string = 'CREATE TABLE Persons (PersonID: int, LastName varchar(255), FirstName varchar(255), Adress varchar(255), City varchar(255))'



export function initDB(){
    return new Promise((resolve, reject)=>{
        dbController(prompt).then((res)=>{
            resolve(res)
        }).catch((rej)=>(
            reject(rej)
        ))
    })
}