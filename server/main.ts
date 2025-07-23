import getEnvConfigs from "./src/utils/getEnvConfigs.ts";
import { StatusCode } from "./src/constants/statuscode.ts";
import express from 'express'
console.log(StatusCode)
const { env } = getEnvConfigs()
console.log(env) 

const app: express.Application = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})
