import dotenv from 'dotenv'

export class Config {

    PGHOST: string
    PGUSER: string
    PGDATABASE: string
    PGPASSWORD: string
    PGPORT: string
    JWT: string

    constructor() {
        dotenv.config({path: './.env'})
        this.PGHOST = this.loadEnvVars('PGHOST')
        this.PGUSER = this.loadEnvVars('PGUSER')
        this.PGDATABASE = this.loadEnvVars('PGDATABASE')
        this.PGPASSWORD = this.loadEnvVars('PGPASSWORD')
        this.PGPORT = this.loadEnvVars('PGPORT')
        this.JWT = this.loadEnvVars('JWT')
    }

    loadEnvVars(envVar: string): string {
        if (typeof process.env[envVar] === 'string') {
            // @ts-ignore
            return process.env[envVar]
        } else {
            throw Error('Umgebungsvariable ' + envVar + ' is Missing or has the wrong Type, must be type String')
        }
    }

}
