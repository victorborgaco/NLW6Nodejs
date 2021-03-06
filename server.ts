import "reflect-metadata"
import express, {NextFunction, Request, Response} from 'express'
import 'express-async-errors'
import {router} from "./src/routes";
import "./src/database"


const app = express()
app.use(express.json())
app.use(router)

app.use((err: Error, resquest: Request, response: Response, next: NextFunction) => {
    if (Error instanceof Error) {
        return response.status(400).json({error: err.message})
    } else {
        return response.status(500).json({status: 'error', message: 'Internal Server Error'})
    }

})

app.listen(3000, () => console.log('Server is Running NLW'))
