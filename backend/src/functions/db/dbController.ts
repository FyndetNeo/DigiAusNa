import {Client, QueryConfig} from 'pg'
import {APPCONFIG} from '../../app'
const client: Client = new Client(
    {
        user: APPCONFIG.PGUSER,
        host: APPCONFIG.PGHOST,
        database: APPCONFIG.PGDATABASE,
        password: APPCONFIG.PGPASSWORD,
        port: Number(APPCONFIG.PGPORT)
    }
)


export async function dbController(queryTextOrConfig: string | QueryConfig<any[]>, values?: any[] | undefined){
    return new Promise(async (resolve, reject) => {
        await client.connect().then(async () => {
            try {
                if (values) {
                    const res = await client.query(queryTextOrConfig, values)
                    //resolve(res.rows[0].message)
                    await client.end()
                    resolve(res)
                } else {
                    const res = await client.query(queryTextOrConfig)
                    await client.end()
                    resolve(res)
                }
            } catch (err) {
                await client.end()
                reject(err);
            }
        })
            .catch((err)=>{
                reject(err);
            })

    })

}

