import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import serverless from "serverless-http"

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get("/", async (req, res) => {
    console.log(req)
    return res.send(200)
})

export const handler = serverless(app)