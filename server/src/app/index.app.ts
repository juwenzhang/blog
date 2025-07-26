import express from 'express';
import getEnvConfigs from "../utils/getEnvConfigs.util.ts";
import cors from 'cors'
import http from 'http'
import { RESTART_SERVER_COUNT } from "../constants/keys.ts";
import { type TypeFromEnv } from "../utils/getTypeFromenv.util.ts";
import type { Express, Request, Response } from "express";

const { env: { APP_PORT } }: { env: TypeFromEnv } = getEnvConfigs()
const app: Express = express()
app.use(cors())

app.get('/', (_: Request, res: Response) => {
    res.status(200).send('hello world')
})

app.get('/apps', (_: Request, res: Response) => {
    res.status(200).json({
        message: 'app is running'
    })
})

const main: () => void = () => {
    let count: number = 0
    const server: http.Server = app.listen(APP_PORT, () => {
        console.log(`server is running at http://localhost:${APP_PORT}`)
    })
    server.on('error', (err) => {
        console.log(err)
        count++
        if (count >= RESTART_SERVER_COUNT) {
            console.log('restart server failed')
            process.exit(1)
        }
    })
}

export default main
export type MainType = ReturnType<typeof main>
