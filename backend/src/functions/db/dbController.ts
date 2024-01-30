import {Client, QueryConfig} from 'pg'
const client = new Client()


export async function dbController(queryTextOrConfig: string | QueryConfig<any[]>, values?: any[] | undefined){
    return new Promise(async (resolve, reject) => {
        await client.connect()
            .catch((err)=>{
                reject(err);
            })
        try {
            if (values){
                const res = await client.query(queryTextOrConfig, values)
                resolve(res)
                //resolve(res.rows[0].message)
            } else {
                const res = await client.query(queryTextOrConfig)
                resolve(res)
            }
        } catch (err) {
            reject(err);
        } finally {
            await client.end()
        }
    })

}

