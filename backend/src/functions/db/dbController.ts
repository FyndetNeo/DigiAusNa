import {Client, QueryConfig} from 'pg'
const client = new Client(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'example',
        port: 5432
    }
)


export async function dbController(queryTextOrConfig: string | QueryConfig<any[]>, values?: any[] | undefined){
    return new Promise(async (resolve, reject) => {
        await client.connect().then(async () => {
            try {
                if (values) {
                    const res = await client.query(queryTextOrConfig, values)
                    resolve(res)
                    //resolve(res.rows[0].message)
                } else {
                    const res = await client.query(queryTextOrConfig)
                    resolve(res)
                }
            } catch (err) {
                reject(err);
                await client.end()
            } finally {
                await client.end()
            }
        })
            .catch((err)=>{
                reject(err);
            })

    })

}

