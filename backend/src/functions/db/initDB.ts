import {dbController} from './dbController'

const prompt1: string = 'CREATE TABLE Persons(PersonID int, LastName varchar(255), FirstName varchar(255), Address varchar(255), City varchar(255));';



export function initDB(){
    return new Promise((resolve, reject)=>{
        dbController(prompt1).then((res)=>{
            resolve(res)
        }).catch((rej)=>(
            reject(rej)
        ))
    })
}